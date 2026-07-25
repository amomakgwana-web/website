"use client";

import { useState } from "react";

type Method = "card" | "applepay" | "googlepay" | "capitecpay" | "paylink" | "eft";
type Status = "idle" | "processing" | "success";

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
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ fontFamily: "Georgia,serif", fontWeight: "800", fontStyle: "italic", fontSize: "14px", color: "#1A1F71", letterSpacing: "-.3px" }}>VISA</span>
        <span style={{ fontFamily: "var(--fb)", fontWeight: "800", fontSize: "12px", color: "var(--r)" }}>Mastercard</span>
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

export default function BipraPayCheckoutDemo() {
  const [method, setMethod] = useState<Method>("card");
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [ref] = useState(() => "pay_" + Math.random().toString(36).slice(2, 10));

  const cardValid = name.trim().length > 1 && number.replace(/\s/g, "").length >= 12 && expiry.length === 5 && cvv.length >= 3;
  const oneClick = ONE_CLICK_LABEL[method];
  const canPay = method === "card" ? cardValid : method === "eft" ? !!bank : confirmed;

  const pay = () => {
    if (!canPay || status !== "idle") return;
    setStatus("processing");
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

        <div style={{ background: "linear-gradient(160deg,#FFF3F0,#FFEDE7)", borderRadius: "16px", border: "1px solid var(--border)", padding: "28px" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--gl)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div style={{ fontFamily: "var(--fd)", fontSize: "18px", fontWeight: "700", marginBottom: "6px" }}>Payment successful</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "18px" }}>R{PRICE.toLocaleString()}.00 &middot; ref {ref}</p>
              <button className="btn btn-o btn-md" onClick={reset}>Try again</button>
            </div>
          ) : status === "processing" ? (
            <div style={{ textAlign: "center", padding: "44px 0" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "3px solid var(--rl)", borderTopColor: "var(--r)", margin: "0 auto 18px", animation: "spin .8s linear infinite" }}></div>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>Processing payment&hellip;</div>
            </div>
          ) : (
            <>
              <label style={labelStyle}>Choose a payment method</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginBottom: "22px", marginTop: "6px" }}>
                {METHODS.map((m) => (
                  <button key={m.key} onClick={() => selectMethod(m.key)} style={{ padding: "12px 8px", borderRadius: "10px", border: method === m.key ? "1.5px solid var(--r)" : "1.5px solid var(--border2)", background: method === m.key ? "var(--rl)" : "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                    <button key={b.name} onClick={() => setBank(b.name)} aria-label={b.name} style={{ display: "flex", alignItems: "center", padding: "12px 14px", borderRadius: "10px", border: bank === b.name ? "1.5px solid var(--r)" : "1.5px solid var(--border2)", background: bank === b.name ? "var(--rl)" : "#fff", cursor: "pointer" }}>
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

              <button className="btn btn-r btn-lg" style={{ width: "100%", justifyContent: "center", marginTop: "22px", opacity: canPay ? "1" : ".5", cursor: canPay ? "pointer" : "not-allowed" }} onClick={pay} disabled={!canPay}>Pay R{PRICE.toLocaleString()}.00</button>
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
