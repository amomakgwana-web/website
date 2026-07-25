"use client";

import { useState } from "react";

type Method = "card" | "eft";
type Status = "idle" | "processing" | "success";

const BANKS = ["Standard Bank", "FNB", "ABSA", "Nedbank", "Capitec"];
const PRICE = 1499;

function formatCardNumber(v: string) {
  return v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(v: string) {
  const digits = v.replace(/\D/g, "").slice(0, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
}

export default function BipraPayCheckoutDemo() {
  const [method, setMethod] = useState<Method>("card");
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState<string | null>(null);
  const [ref] = useState(() => "pay_" + Math.random().toString(36).slice(2, 10));

  const cardValid = name.trim().length > 1 && number.replace(/\s/g, "").length >= 12 && expiry.length === 5 && cvv.length >= 3;
  const canPay = method === "card" ? cardValid : !!bank;

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
          <div style={{ width: "100%", aspectRatio: "1.4", borderRadius: "12px", background: "linear-gradient(135deg,var(--rl),#FFF0EE)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--r)" strokeWidth="1.6"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
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
              <div style={{ display: "flex", gap: "8px", marginBottom: "22px" }}>
                <button onClick={() => setMethod("card")} style={{ flex: "1", padding: "10px", borderRadius: "9px", border: method === "card" ? "1.5px solid var(--r)" : "1.5px solid var(--border2)", background: method === "card" ? "var(--rl)" : "#fff", color: method === "card" ? "var(--r)" : "var(--ink2)", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>Card</button>
                <button onClick={() => setMethod("eft")} style={{ flex: "1", padding: "10px", borderRadius: "9px", border: method === "eft" ? "1.5px solid var(--r)" : "1.5px solid var(--border2)", background: method === "eft" ? "var(--rl)" : "#fff", color: method === "eft" ? "var(--r)" : "var(--ink2)", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>Instant EFT</button>
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
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={labelStyle}>Select your bank</label>
                  {BANKS.map((b) => (
                    <button key={b} onClick={() => setBank(b)} style={{ textAlign: "left", padding: "12px 14px", borderRadius: "10px", border: bank === b ? "1.5px solid var(--r)" : "1.5px solid var(--border2)", background: bank === b ? "var(--rl)" : "#fff", color: bank === b ? "var(--r)" : "var(--ink2)", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }}>{b}</button>
                  ))}
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
