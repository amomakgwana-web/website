"use client";

import { useState } from "react";

type Method = "card" | "applepay" | "googlepay" | "capitecpay" | "paylink" | "eft";
type Status = "idle" | "processing" | "success";

const BANKS = ["Standard Bank", "FNB", "ABSA", "Nedbank", "Capitec"];
const PRICE = 1499;

const METHODS: { key: Method; label: string; icon: React.ReactNode }[] = [
  {
    key: "card",
    label: "Card",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ fontFamily: "Georgia,serif", fontWeight: "800", fontStyle: "italic", fontSize: "15px", color: "#1A1F71", letterSpacing: "-.5px" }}>VISA</span>
        <span style={{ display: "inline-flex", width: "22px", height: "14px", position: "relative" }}>
          <span style={{ position: "absolute", left: "0", width: "14px", height: "14px", borderRadius: "50%", background: "#EB001B" }}></span>
          <span style={{ position: "absolute", left: "8px", width: "14px", height: "14px", borderRadius: "50%", background: "#F79E1B", mixBlendMode: "multiply" }}></span>
        </span>
      </div>
    ),
  },
  {
    key: "applepay",
    label: "Apple Pay",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
        <svg width="14" height="16" viewBox="0 0 14 16" fill="#000"><path d="M9.5 2.5c.6-.7 1-1.7.9-2.5-.8 0-1.7.5-2.3 1.2-.5.6-1 1.6-.9 2.5.9.1 1.8-.5 2.3-1.2zM12 5.6c-1.3-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.4.7-3.1 1.9-1.3 2.3-.3 5.6.9 7.5.6.9 1.3 1.9 2.3 1.9.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.8.7-1 1-2 1-2-.1 0-1.9-.7-1.9-2.9 0-1.8 1.5-2.7 1.6-2.7-.9-1.3-2.2-1.5-2.7-1.9z"></path></svg>
        <span style={{ fontFamily: "var(--fb)", fontWeight: "600", fontSize: "13px", color: "#000" }}>Pay</span>
      </div>
    ),
  },
  {
    key: "googlepay",
    label: "Google Pay",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
        <svg width="15" height="15" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg>
        <span style={{ fontFamily: "var(--fb)", fontWeight: "600", fontSize: "13px", color: "#5F6368" }}>Pay</span>
      </div>
    ),
  },
  {
    key: "capitecpay",
    label: "CapitecPay",
    icon: (
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#00857A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg></span>
        <span style={{ fontFamily: "var(--fb)", fontWeight: "700", fontSize: "12.5px", color: "#00857A" }}>CapitecPay</span>
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

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "40px", alignItems: "start", marginTop: "24px" }} className="two-col">

        <div className="gcard shine grid-pop tilt" style={{ borderRadius: "16px", padding: "28px" }}>
          <div style={{ width: "100%", aspectRatio: "1.4", borderRadius: "12px", background: "linear-gradient(135deg,var(--rl),#FFF0EE)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px", overflow: "hidden" }}>
            <img src="/headphones.png" alt="Wireless headphones" style={{ width: "62%", height: "62%", objectFit: "contain" }} />
          </div>
          <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".6px", marginBottom: "4px" }}>Demo storefront</div>
          <div style={{ fontFamily: "var(--fd)", fontSize: "17px", fontWeight: "700", marginBottom: "6px" }}>Wireless headphones</div>
          <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "18px" }}>Qty: 1</div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--muted)" }}><span>Subtotal</span><span>R{PRICE.toLocaleString()}.00</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--muted)" }}><span>Delivery</span><span>Free</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", fontWeight: "700", color: "var(--ink)", paddingTop: "8px", borderTop: "1px solid var(--border)" }}><span>Total</span><span>R{PRICE.toLocaleString()}.00</span></div>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid var(--border)", padding: "28px", boxShadow: "var(--sh)" }}>
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
                    <button key={b} onClick={() => setBank(b)} style={{ textAlign: "left", padding: "12px 14px", borderRadius: "10px", border: bank === b ? "1.5px solid var(--r)" : "1.5px solid var(--border2)", background: bank === b ? "var(--rl)" : "#fff", color: bank === b ? "var(--r)" : "var(--ink2)", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }}>{b}</button>
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
    </div></section>
  );
}
