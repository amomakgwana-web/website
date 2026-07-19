"use client";

import Link from "next/link";
import { useState } from "react";

const PRODUCT_CHIPS: { label: string; color: string; bg: string }[] = [
  { label: "BipraPay", color: "#E8152A", bg: "var(--rl)" },
  { label: "VeriBills", color: "#0A7B3E", bg: "var(--gl)" },
  { label: "Morr ERP", color: "#5533FF", bg: "var(--pl)" },
];

const INTENT_CHIPS = ["Book a demo", "Get pricing", "Technical question", "Enterprise inquiry"];

const chipBase: React.CSSProperties = {
  padding: "7px 14px",
  borderRadius: "100px",
  fontSize: "12px",
  fontWeight: "500",
  cursor: "pointer",
  border: "1.5px solid var(--border2)",
  background: "#fff",
  color: "var(--muted)",
  transition: "all .15s",
};

export default function ContactClient() {
  const [products, setProducts] = useState<Set<string>>(new Set());
  const [intent, setIntent] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const toggleProduct = (label: string) => {
    setProducts((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <div id="page-contact" className="page active pw">
    <section className="section" style={{paddingTop:"100px"}}>
    <div className="inner two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}}>
    <div>
      <p className="slabel">Contact us</p>
      <h1 style={{fontFamily:"var(--fd)",fontSize:"clamp(32px,4vw,48px)",fontWeight:"800",letterSpacing:"-1.5px",marginBottom:"16px",lineHeight:"1.1"}}>Let&apos;s talk about your business</h1>
      <p style={{fontSize:"16px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"40px",fontWeight:"300"}}>Whether you&apos;re exploring one product or the full platform, our team will help you find the right fit.</p>
      {!sent && (
      <div id="contact-form">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"16px"}}>
          <div className="field"><label>First name <span style={{color:"var(--r)"}}>*</span></label><input type="text" placeholder="Kagiso" /></div>
          <div className="field"><label>Last name <span style={{color:"var(--r)"}}>*</span></label><input type="text" placeholder="Molefe" /></div>
        </div>
        <div className="field" style={{marginBottom:"16px"}}><label>Work email <span style={{color:"var(--r)"}}>*</span></label><input type="email" placeholder="kagiso@company.co.za" /></div>
        <div className="field" style={{marginBottom:"20px"}}><label>Company</label><input type="text" placeholder="Meridian Group SA" /></div>
        <div style={{marginBottom:"20px"}}>
          <div style={{fontSize:"13px",fontWeight:"500",color:"var(--ink2)",marginBottom:"10px"}}>Products you&apos;re interested in</div>
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
            {PRODUCT_CHIPS.map((chip) => {
              const active = products.has(chip.label);
              return (
                <button
                  key={chip.label}
                  type="button"
                  style={active ? { ...chipBase, borderColor: chip.color, background: chip.bg, color: chip.color } : chipBase}
                  onClick={() => toggleProduct(chip.label)}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>
        <div style={{marginBottom:"20px"}}>
          <div style={{fontSize:"13px",fontWeight:"500",color:"var(--ink2)",marginBottom:"10px"}}>What are you looking to do?</div>
          <div id="intent-chips" style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
            {INTENT_CHIPS.map((label) => {
              const active = intent === label;
              return (
                <button
                  key={label}
                  type="button"
                  style={active ? { ...chipBase, borderColor: "var(--p)", background: "var(--pl)", color: "var(--p)" } : chipBase}
                  onClick={() => setIntent(label)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="field" style={{marginBottom:"24px"}}><label>Message</label><textarea rows={4} placeholder="Tell us more about your setup and what you're trying to solve..."></textarea></div>
        <button className="btn btn-p btn-lg" style={{width:"100%",justifyContent:"center"}} onClick={() => setSent(true)}>Send message</button>
      </div>
      )}
      {sent && (
      <div id="contact-success" style={{background:"var(--gl)",border:"1px solid rgba(10,123,62,0.2)",borderRadius:"16px",padding:"40px 32px",textAlign:"center"}}>
        <div style={{width:"56px",height:"56px",borderRadius:"50%",background:"var(--g)",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
        <div style={{fontFamily:"var(--fd)",fontSize:"22px",fontWeight:"700",marginBottom:"8px"}}>Message received</div>
        <p style={{fontSize:"14px",color:"var(--muted)"}}>Our team will be in touch within one business day.</p>
      </div>
      )}
    </div>
    <div style={{paddingTop:"64px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"24px",marginBottom:"40px"}}>
        <div style={{display:"flex",gap:"16px",alignItems:"flex-start"}}><div style={{width:"40px",height:"40px",borderRadius:"10px",background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",flexShrink:"0"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--p)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div><div><div style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"2px"}}>Email</div><div style={{fontSize:"14px",fontWeight:"500"}}>enquiry@biprasoftware.com</div></div></div>
        <div style={{display:"flex",gap:"16px",alignItems:"flex-start"}}><div style={{width:"40px",height:"40px",borderRadius:"10px",background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",flexShrink:"0"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div><div><div style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"2px"}}>Phone</div><div style={{fontSize:"14px",fontWeight:"500"}}>+27 67 716 4066</div></div></div>
        <div style={{display:"flex",gap:"16px",alignItems:"flex-start"}}><div style={{width:"40px",height:"40px",borderRadius:"10px",background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",flexShrink:"0"}}>◎</div><div><div style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"2px"}}>Location</div><div style={{fontSize:"14px",fontWeight:"500"}}>Sandton, Johannesburg, South Africa</div></div></div>
      </div>
      <div className="divider" style={{marginBottom:"28px"}}></div>
      <div style={{fontFamily:"var(--fd)",fontSize:"16px",fontWeight:"700",marginBottom:"16px"}}>Response times</div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"11px 0",borderBottom:"1px solid var(--border)"}}><span style={{fontSize:"13px",color:"var(--muted)"}}>Enterprise clients</span><span style={{fontSize:"13px",fontWeight:"600"}}>1 hour SLA</span></div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"11px 0",borderBottom:"1px solid var(--border)"}}><span style={{fontSize:"13px",color:"var(--muted)"}}>Business clients</span><span style={{fontSize:"13px",fontWeight:"600"}}>8 hours</span></div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"11px 0",borderBottom:"1px solid var(--border)"}}><span style={{fontSize:"13px",color:"var(--muted)"}}>Starter clients</span><span style={{fontSize:"13px",fontWeight:"600"}}>48 hours</span></div>
      <div style={{display:"flex",justifyContent:"space-between",padding:"11px 0"}}><span style={{fontSize:"13px",color:"var(--muted)"}}>New enquiries</span><span style={{fontSize:"13px",fontWeight:"600"}}>1 business day</span></div>
    </div>
    </div></section>
    </div>
  );
}
