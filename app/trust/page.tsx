import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust Center",
  description: "BIPRA's compliance certifications, security posture, and legal documentation in one place.",
};

const CREDENTIALS = [
  { name: "PCI-DSS Level 1", desc: "Annual third-party audit of card-payment handling" },
  { name: "ISO 27001", desc: "Information security management" },
  { name: "SOC 2 Type II", desc: "Independently audited security controls" },
  { name: "POPIA Compliant", desc: "South African data protection" },
  { name: "SARB Licensed", desc: "Licensed payment service provider" },
];

const DOCS = [
  { name: "Security", desc: "Certifications, encryption, access control, and disaster recovery", href: "/security" },
  { name: "System Status", desc: "Live uptime and incident history for every product", href: "/status" },
  { name: "Privacy Policy", desc: "How we collect, use, and protect personal information", href: "/privacy" },
  { name: "Cookie Notice", desc: "How we use cookies and similar technologies", href: "/cookies" },
  { name: "Terms of Service", desc: "The terms governing use of BIPRA products", href: "/terms" },
];

export default function Page() {
  return (
    <div id="page-trust" className="page active pw">
    <section className="section" style={{paddingTop:"100px"}}><div className="inner">
      <p className="slabel">Trust Center</p>
      <h1 style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(32px,4vw,48px)",fontWeight:"800",letterSpacing:"-1px",marginBottom:"16px",lineHeight:"1.1"}}>Compliance, security &amp; legal documentation</h1>
      <p style={{fontSize:"17px",color:"var(--muted)",lineHeight:"1.75",maxWidth:"620px",marginBottom:"48px",fontWeight:"300"}}>Everything you need to evaluate BIPRA for procurement, security review, or audit — in one place.</p>

      <h2 style={{fontSize:"14px",fontWeight:"700",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"16px"}}>Certifications &amp; compliance</h2>
      <div className="g3" style={{gap:"16px",marginBottom:"56px"}}>
        {CREDENTIALS.map((c) => (
          <div key={c.name} style={{display:"flex",alignItems:"center",gap:"14px",padding:"18px 20px",background:"var(--off)",borderRadius:"12px"}}>
            <span style={{width:"34px",height:"34px",borderRadius:"9px",background:"var(--gl)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <div><div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)"}}>{c.name}</div><div style={{fontSize:"12.5px",color:"var(--muted)"}}>{c.desc}</div></div>
          </div>
        ))}
      </div>

      <h2 style={{fontSize:"14px",fontWeight:"700",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"16px"}}>Documentation</h2>
      <div className="g3" style={{gap:"16px",marginBottom:"48px"}}>
        {DOCS.map((d) => (
          <Link key={d.name} href={d.href} className="gcard" style={{display:"block",padding:"22px",borderRadius:"14px"}}>
            <div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px"}}>{d.name}</div>
            <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65",marginBottom:"12px"}}>{d.desc}</p>
            <span style={{fontSize:"13px",fontWeight:"600",color:"var(--p)"}}>View &rarr;</span>
          </Link>
        ))}
      </div>

      <div style={{background:"var(--ink)",borderRadius:"20px",padding:"40px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"24px"}}>
        <div><div style={{fontSize:"20px",fontWeight:"700",color:"#fff",marginBottom:"6px"}}>Request our security documentation</div><div style={{fontSize:"14px",color:"rgba(255,255,255,0.5)"}}>Full pen-test reports, certifications, and DPA available to enterprise clients under NDA.</div></div>
        <Link className="btn btn-w btn-lg" href="/contact">Request docs</Link>
      </div>
    </div></section></div>
  );
}
