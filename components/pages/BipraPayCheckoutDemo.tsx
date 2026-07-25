"use client";

import { useState } from "react";

type Method = "card" | "applepay" | "googlepay" | "capitecpay" | "paylink" | "eft";
type Status = "idle" | "processing" | "success";
type SuccessView = "confirmed" | "receipt" | "tracking";

type Order = {
  ref: string;
  number: string;
  tracking: string;
  paidAt: string;
  eta: string;
  paidWith: string;
};

const BANKS: { name: string; logo: string }[] = [
  { name: "Standard Bank", logo: "/standard-bank-logo.png" },
  { name: "FNB", logo: "/fnb-logo.png" },
  { name: "ABSA", logo: "/absa-logo.png" },
  { name: "Capitec", logo: "/capitec-logo.png" },
];
const PRICE = 1499;

const METHODS: { key: Method; label: string; icon: React.ReactNode }[] = [
  {
    key: "card",
    label: "Card",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img src="/mastercard-logo.png" alt="" style={{ height: "18px", width: "auto" }} />
        <span style={{ fontFamily: "var(--fb)", fontWeight: "800", fontSize: "13px", color: "var(--r)" }}>Mastercard</span>
      </div>
    ),
  },
  {
    key: "applepay",
    label: "Apple Pay",
    icon: <img src="/applepay-logo.png" alt="Apple Pay" style={{ height: "15px", width: "auto" }} />,
  },
  {
    key: "googlepay",
    label: "Google Pay",
    icon: <img src="/googlepay-logo.png" alt="Google Pay" style={{ height: "15px", width: "auto" }} />,
  },
  {
    key: "capitecpay",
    label: "CapitecPay",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img src="/capitec-logo.png" alt="" style={{ height: "16px", width: "auto" }} />
        <span style={{ fontFamily: "var(--fb)", fontWeight: "700", fontSize: "12.5px", color: "var(--ink2)" }}>CapitecPay</span>
      </div>
    ),
  },
  {
    key: "paylink",
    label: "PayLink",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--p)" strokeWidth="2.2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        <span style={{ fontFamily: "var(--fb)", fontWeight: "700", fontSize: "13px", color: "var(--p)" }}>PayLink</span>
      </div>
    ),
  },
  {
    key: "eft",
    label: "EFT",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" strokeWidth="2"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 21 7 3 7"></polygon></svg>
        <span style={{ fontFamily: "var(--fb)", fontWeight: "700", fontSize: "13px", color: "var(--ink2)" }}>EFT</span>
      </div>
    ),
  },
];

function formatCardNumber(v: string) {
  return v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(v: string) {
  const digits = v.replace(/\D/g, "").slice(0, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
}

const ONE_CLICK_LABEL: Partial<Record<Method, string>> = {
  applepay: "Apple Pay",
  googlepay: "Google Pay",
  capitecpay: "CapitecPay",
  paylink: "PayLink",
};

const DELIVERY_STEPS: { label: string; meta: string }[] = [
  { label: "Order placed", meta: "" },
  { label: "Payment confirmed", meta: "" },
  { label: "Packing at warehouse", meta: "Johannesburg fulfilment centre" },
  { label: "Out for delivery", meta: "Pending" },
  { label: "Delivered", meta: "Pending" },
];

const VAT = Math.round((PRICE - PRICE / 1.15) * 100) / 100;

function rand(len: number) {
  return Math.floor(Math.random() * Math.pow(10, len)).toString().padStart(len, "0");
}

function money(n: number) {
  return "R" + n.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function BipraPayCheckoutDemo() {
  const [method, setMethod] = useState<Method>("card");
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const [view, setView] = useState<SuccessView>("confirmed");
  const [emailed, setEmailed] = useState(false);

  const cardValid = name.trim().length > 1 && number.replace(/\s/g, "").length >= 12 && expiry.length === 5 && cvv.length >= 3;
  const oneClick = ONE_CLICK_LABEL[method];
  const canPay = method === "card" ? cardValid : method === "eft" ? !!bank : confirmed;

  const pay = () => {
    if (!canPay || status !== "idle") return;
    setStatus("processing");

    const now = new Date();
    const delivery = new Date(now.getTime() + 3 * 86400000);
    const last4 = number.replace(/\s/g, "").slice(-4);
    setOrder({
      ref: "pay_" + Math.random().toString(36).slice(2, 10),
      number: "BS-" + rand(6),
      tracking: "BE" + rand(8) + "ZA",
      paidAt: now.toLocaleString("en-ZA", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
      eta: delivery.toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long" }),
      paidWith: method === "card" ? `Mastercard •••• ${last4}` : method === "eft" ? `EFT · ${bank}` : (oneClick as string),
    });
    setView("confirmed");
    setEmailed(false);
    setTimeout(() => setStatus("success"), 1400);
  };

  const reset = () => {
    setStatus("idle");
    setName("");
    setNumber("");
    setExpiry("");
    setCvv("");
    setBank(null);
    setConfirmed(false);
    setOrder(null);
    setView("confirmed");
    setEmailed(false);
  };

  const selectMethod = (m: Method) => {
    setMethod(m);
    setConfirmed(false);
  };

  const inputStyle: React.CSSProperties = { width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid var(--border2)", fontSize: "14px", fontFamily: "var(--fb)", color: "var(--ink)", outline: "none" };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: "12px", fontWeight: "600", color: "var(--muted)", marginBottom: "6px" };

  return (
    <section className="section"><div className="inner">
      <p className="slabel">Try it yourself</p>
      <h2 className="stitle">See the checkout your customers experience</h2>
      <p className="ssub">A live preview of BipraPay&rsquo;s hosted checkout, embedded exactly like it would be on your storefront. This is a demo &mdash; no real payment is processed and nothing you enter is stored or transmitted.</p>

      <div className="gcard shine" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--sh)", marginTop: "24px" }}>

        <div style={{ height: "4px", background: "linear-gradient(90deg,var(--r),#FF6B35,var(--r))" }}></div>

        <div style={{ background: "linear-gradient(135deg,var(--rl),#FFF0EC)", padding: "12px 18px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid var(--border)" }}>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }}></span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }}></span>
          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }}></span>
          <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "100px", padding: "5px 16px", fontSize: "11px", color: "var(--muted)", display: "flex", alignItems: "center", gap: "6px", maxWidth: "260px" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              bipra.shop/checkout
            </div>
          </div>
        </div>

        <div style={{ background: "#fff", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg,var(--r),#FF6B35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <span style={{ fontFamily: "var(--fd)", fontWeight: "800", fontSize: "16px", letterSpacing: "-.3px", color: "var(--ink)" }}>Bipra <span style={{ color: "var(--r)" }}>Shop</span></span>
          </div>
          <div style={{ position: "relative" }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span style={{ position: "absolute", top: "-7px", right: "-7px", width: "15px", height: "15px", borderRadius: "50%", background: "var(--r)", color: "#fff", fontSize: "9px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1</span>
          </div>
        </div>

        <div style={{ background: "linear-gradient(160deg,#FFF8F6 0%,#fff 45%)", padding: "clamp(20px,3vw,32px)", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "clamp(24px,3vw,36px)", alignItems: "start" }} className="two-col">

        <div>
          <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "12px" }}>Bipra Shop / Audio / Wireless headphones</div>
          <div style={{ width: "100%", aspectRatio: "1.4", borderRadius: "12px", background: "#fff", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px", overflow: "hidden" }}>
            <img src="/headphones.png" alt="Wireless headphones" style={{ width: "62%", height: "62%", objectFit: "contain" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <div style={{ display: "flex", gap: "1px", color: "#FBBC05" }}>{"★★★★★".split("").map((s, i) => <span key={i} style={{ fontSize: "11px" }}>{s}</span>)}</div>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>(214)</span>
            <span style={{ fontSize: "10px", fontWeight: "700", color: "var(--g)", background: "var(--gl)", padding: "2px 8px", borderRadius: "100px" }}>In stock</span>
          </div>
          <div style={{ fontFamily: "var(--fd)", fontSize: "17px", fontWeight: "700", marginBottom: "6px" }}>Wireless headphones</div>
          <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "18px" }}>Qty: 1</div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--muted)" }}><span>Subtotal</span><span>R{PRICE.toLocaleString()}.00</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--muted)" }}><span>Delivery</span><span>Free</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", fontWeight: "700", color: "var(--r)", paddingTop: "8px", borderTop: "1px solid var(--border)" }}><span style={{ color: "var(--ink)" }}>Total</span><span>R{PRICE.toLocaleString()}.00</span></div>
          </div>
        </div>

        <div style={{ background: "linear-gradient(160deg,#FFF3F0,#FFEDE7)", borderRadius: "16px", border: "1px solid var(--border)", padding: "clamp(18px,3vw,28px)" }}>
          {status === "success" && order ? (
            view === "confirmed" ? (
              <div>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--gl)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div style={{ fontFamily: "var(--fd)", fontSize: "19px", fontWeight: "700", marginBottom: "5px" }}>Payment successful</div>
                  <p style={{ fontSize: "13px", color: "var(--muted)" }}>{money(PRICE)} paid with {order.paidWith}</p>
                </div>

                <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "11px" }}>
                  {([["Order number", order.number], ["Payment reference", order.ref], ["Estimated delivery", order.eta]] as [string, string][]).map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", fontSize: "12.5px" }}>
                      <span style={{ color: "var(--muted)", flexShrink: "0" }}>{k}</span>
                      <span style={{ fontWeight: "700", color: "var(--ink)", textAlign: "right", minWidth: "0" }}>{v}</span>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "11.5px", color: "var(--muted)", textAlign: "center", marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "6px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2" style={{ flexShrink: 0 }}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg>
                  Receipt sent to your email
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "18px" }}>
                  <button className="btn btn-o btn-md" style={{ justifyContent: "center" }} onClick={() => setView("receipt")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8M8 17h5"></path></svg>
                    View receipt
                  </button>
                  <button className="btn btn-r btn-md" style={{ justifyContent: "center" }} onClick={() => setView("tracking")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h-3v11h8v-6z"></path><path d="M13 14V5a2 2 0 0 0-2-2H3v11"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle><path d="M9 18h6"></path></svg>
                    Track order
                  </button>
                </div>

                <button onClick={reset} style={{ display: "block", margin: "16px auto 0", background: "none", border: "none", fontSize: "12px", color: "var(--muted)", cursor: "pointer", textDecoration: "underline", fontFamily: "var(--fb)" }}>Run the demo again</button>
              </div>
            ) : view === "receipt" ? (
              <div>
                <button onClick={() => setView("confirmed")} style={{ display: "flex", alignItems: "center", gap: "6px", background: "none", border: "none", padding: "0", marginBottom: "16px", fontSize: "12.5px", fontWeight: "600", color: "var(--muted)", cursor: "pointer", fontFamily: "var(--fb)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m15 18-6-6 6-6"></path></svg>
                  Back
                </button>

                <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", paddingBottom: "14px", borderBottom: "1px dashed var(--border2)" }}>
                    <div>
                      <div style={{ fontFamily: "var(--fd)", fontWeight: "800", fontSize: "15px", letterSpacing: "-.3px" }}>Bipra <span style={{ color: "var(--r)" }}>Shop</span></div>
                      <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Tax invoice &middot; VAT 4123456789</div>
                    </div>
                    <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: ".5px", color: "var(--g)", background: "var(--gl)", border: "1.5px solid var(--g)", borderRadius: "6px", padding: "3px 9px", flexShrink: "0" }}>PAID</span>
                  </div>

                  <div style={{ padding: "14px 0", borderBottom: "1px dashed var(--border2)", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {([["Receipt no.", order.number], ["Date", order.paidAt], ["Paid with", order.paidWith], ["Reference", order.ref]] as [string, string][]).map(([k, v]) => (
                      <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "10px", fontSize: "12px" }}>
                        <span style={{ color: "var(--muted)", flexShrink: "0" }}>{k}</span>
                        <span style={{ color: "var(--ink)", fontWeight: "600", textAlign: "right", minWidth: "0" }}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: "14px 0", borderBottom: "1px dashed var(--border2)", display: "flex", flexDirection: "column", gap: "9px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", fontSize: "12.5px" }}>
                      <span style={{ color: "var(--ink)", minWidth: "0" }}>Wireless headphones&nbsp;<span style={{ color: "var(--muted)", whiteSpace: "nowrap" }}>&times; 1</span></span>
                      <span style={{ fontWeight: "600", flexShrink: "0" }}>{money(PRICE)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "12.5px", color: "var(--muted)" }}><span>Delivery</span><span>Free</span></div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "12.5px", color: "var(--muted)" }}><span>VAT @ 15% (included)</span><span>{money(VAT)}</span></div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", paddingTop: "14px" }}>
                    <span style={{ fontFamily: "var(--fd)", fontSize: "14px", fontWeight: "700", flexShrink: "0" }}>Total paid</span>
                    <span style={{ fontFamily: "var(--fd)", fontSize: "17px", fontWeight: "800", color: "var(--r)", whiteSpace: "nowrap" }}>{money(PRICE)}</span>
                  </div>
                </div>

                <button className="btn btn-o btn-md" style={{ width: "100%", justifyContent: "center", marginTop: "14px", borderColor: emailed ? "var(--g)" : undefined, color: emailed ? "var(--g)" : undefined }} onClick={() => setEmailed(true)}>
                  {emailed ? "✓ Receipt sent to your inbox" : "Email me a copy"}
                </button>
                <p style={{ fontSize: "11px", color: "var(--muted)", textAlign: "center", marginTop: "12px" }}>Demo receipt &mdash; no email is actually sent.</p>
              </div>
            ) : (
              <div>
                <button onClick={() => setView("confirmed")} style={{ display: "flex", alignItems: "center", gap: "6px", background: "none", border: "none", padding: "0", marginBottom: "16px", fontSize: "12.5px", fontWeight: "600", color: "var(--muted)", cursor: "pointer", fontFamily: "var(--fb)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m15 18-6-6 6-6"></path></svg>
                  Back
                </button>

                <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "16px 18px", marginBottom: "18px" }}>
                  <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "4px" }}>Estimated delivery</div>
                  <div style={{ fontFamily: "var(--fd)", fontSize: "16px", fontWeight: "700", marginBottom: "12px" }}>{order.eta}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "12px", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--muted)" }}>Bipra Express</span>
                    <span style={{ fontWeight: "700", color: "var(--ink)" }}>{order.tracking}</span>
                  </div>
                </div>

                <div>
                  {DELIVERY_STEPS.map((s, i) => {
                    const done = i < 2;
                    const active = i === 2;
                    const last = i === DELIVERY_STEPS.length - 1;
                    return (
                      <div key={s.label} style={{ display: "flex", gap: "13px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <div style={{ width: "22px", height: "22px", borderRadius: "50%", flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", background: done ? "var(--g)" : active ? "var(--r)" : "#fff", border: done || active ? "none" : "2px solid var(--border2)" }}>
                            {done ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2"><polyline points="20 6 9 17 4 12"></polyline></svg> : active ? <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff" }}></span> : null}
                          </div>
                          {!last && <div style={{ width: "2px", flex: "1", minHeight: "22px", background: done ? "var(--g)" : "var(--border2)" }}></div>}
                        </div>
                        <div style={{ paddingBottom: last ? "0" : "18px" }}>
                          <div style={{ fontSize: "13.5px", fontWeight: "700", color: done || active ? "var(--ink)" : "var(--muted)" }}>
                            {s.label}
                            {active && <span style={{ marginLeft: "8px", fontSize: "10px", fontWeight: "700", color: "var(--r)", background: "var(--rl)", padding: "2px 8px", borderRadius: "100px" }}>In progress</span>}
                          </div>
                          <div style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "2px" }}>{i < 2 ? order.paidAt : s.meta}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          ) : status === "processing" ? (
            <div style={{ textAlign: "center", padding: "44px 0" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "3px solid var(--rl)", borderTopColor: "var(--r)", margin: "0 auto 18px", animation: "spin .8s linear infinite" }}></div>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>Processing payment&hellip;</div>
            </div>
          ) : (
            <>
              <label style={labelStyle}>Choose a payment method</label>
              <div className="pay-methods" style={{ marginBottom: "22px", marginTop: "6px" }}>
                {METHODS.map((m) => (
                  <button key={m.key} onClick={() => selectMethod(m.key)} style={{ padding: "12px 8px", borderRadius: "10px", border: method === m.key ? "1.5px solid var(--r)" : "1.5px solid var(--border2)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {m.icon}
                  </button>
                ))}
              </div>

              {method === "card" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div><label style={labelStyle}>Cardholder name</label><input style={inputStyle} placeholder="J. Dlamini" value={name} onChange={(e) => setName(e.target.value)} /></div>
                  <div><label style={labelStyle}>Card number</label><input style={inputStyle} placeholder="4242 4242 4242 4242" value={number} onChange={(e) => setNumber(formatCardNumber(e.target.value))} inputMode="numeric" /></div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    <div><label style={labelStyle}>Expiry</label><input style={inputStyle} placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(formatExpiry(e.target.value))} inputMode="numeric" /></div>
                    <div><label style={labelStyle}>CVV</label><input style={inputStyle} placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" /></div>
                  </div>
                </div>
              ) : method === "eft" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={labelStyle}>Select your bank</label>
                  {BANKS.map((b) => (
                    <button key={b.name} onClick={() => setBank(b.name)} aria-label={b.name} style={{ display: "flex", alignItems: "center", padding: "12px 14px", borderRadius: "10px", border: bank === b.name ? "1.5px solid var(--r)" : "1.5px solid var(--border2)", background: "#fff", cursor: "pointer" }}>
                      <img src={b.logo} alt={b.name} style={{ height: "24px", width: "auto" }} />
                    </button>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 12px", background: "var(--off)", borderRadius: "12px" }}>
                  <p style={{ fontSize: "13.5px", color: "var(--ink2)", lineHeight: "1.65", marginBottom: "16px" }}>You&rsquo;ll be asked to confirm this payment with {oneClick}.</p>
                  <button onClick={() => setConfirmed(true)} style={{ padding: "10px 20px", borderRadius: "9px", border: confirmed ? "1.5px solid var(--g)" : "1.5px solid var(--border2)", background: confirmed ? "var(--gl)" : "#fff", color: confirmed ? "var(--g)" : "var(--ink2)", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>{confirmed ? "✓ Confirmed with " + oneClick : "Confirm with " + oneClick}</button>
                </div>
              )}

              <button className="btn btn-r btn-lg" style={{ width: "100%", justifyContent: "center", marginTop: "22px", background: "var(--r)", cursor: canPay ? "pointer" : "not-allowed" }} onClick={pay} disabled={!canPay}>Pay R{PRICE.toLocaleString()}.00</button>
              <p style={{ fontSize: "11px", color: "var(--muted)", textAlign: "center", marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Secured by BipraPay &mdash; demo only, no data leaves your browser
              </p>
            </>
          )}
        </div>

        </div>
      </div>
    </div></section>
  );
}
