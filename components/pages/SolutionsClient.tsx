"use client";

import Link from "next/link";
import { useState, type ReactElement } from "react";

type ProductKey = "biprapay" | "veribills" | "morr";

const PRODUCTS: Record<ProductKey, { name: string; tag: string; accent: string; accentSoft: string; gradient: string; features: { icon: ReactElement; title: string; desc: string }[] }> = {
  biprapay: {
    name: "BipraPay",
    tag: "Payments",
    accent: "#E8152A",
    accentSoft: "var(--rl)",
    gradient: "linear-gradient(135deg,#E8152A,#FF6B35)",
    features: [
      { icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />, title: "Payroll disbursement", desc: "Pay all employees in a single API call" },
      { icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />, title: "Supplier payments", desc: "Automate accounts payable end to end" },
      { icon: <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />, title: "Instant checkout", desc: "Sub-second settlement at checkout" },
      { icon: <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6M12 1v3M12 20v3" />, title: "Commission payouts", desc: "Pay agents and resellers on schedule" },
      { icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />, title: "Insurance payouts", desc: "Trigger claims payments instantly" },
      { icon: <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />, title: "Government grants", desc: "Mass disbursements with ID verification" },
      { icon: <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10zM2 12h20" />, title: "Multi-rail routing", desc: "EFT, RTC and cross-border in one engine" },
      { icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM9 12h6" />, title: "Reconciliation", desc: "Real-time automatic matching, no manual work" },
      { icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />, title: "Cross-border payments", desc: "SWIFT-enabled international transfers" },
    ],
  },
  veribills: {
    name: "VeriBills",
    tag: "Billing",
    accent: "#0A7B3E",
    accentSoft: "var(--gl)",
    gradient: "linear-gradient(135deg,#0A7B3E,#00C87A)",
    features: [
      { icon: <path d="M9 12h6M9 16h6M9 8h6M5 3h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />, title: "Smart meter billing", desc: "AMI/AMR reads to bill in five minutes" },
      { icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6" />, title: "Bill presentment & rating", desc: "One engine for every tariff structure" },
      { icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />, title: "Rental payment capabilities", desc: "Rent, levies and electricity, one bill" },
      { icon: <path d="M2 10h20M6 15h2M6 19h2" />, title: "DebiCheck debit orders", desc: "Authenticated recurring debt-order collection" },
      { icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM2 8h20" />, title: "Bulk billing", desc: "Every cycle delivered by email and SMS" },
      { icon: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />, title: "Prepaid electricity", desc: "STS-compliant token vending, NRS 047" },
      { icon: <path d="M18 20V10M12 20V4M6 20v-6" />, title: "Tariff engine", desc: "IBT, TOU and flat-rate, NERSA-compliant" },
      { icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />, title: "Multi-channel delivery", desc: "Email, SMS, WhatsApp, portal or print" },
      { icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />, title: "24-hour call centre", desc: "Live support for meter and billing queries" },
    ],
  },
  morr: {
    name: "Morr ERP",
    tag: "Workflow",
    accent: "#FF6B35",
    accentSoft: "var(--mol)",
    gradient: "linear-gradient(135deg,#FF6B35,#FFA36B)",
    features: [
      { icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM9 12h6" />, title: "Budget & approval workflows", desc: "Sign-offs in minutes, not weeks" },
      { icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />, title: "HR & payroll management", desc: "Leave, headcount and pay in one system" },
      { icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6" />, title: "Document management", desc: "Version-controlled, audit-ready records" },
      { icon: <path d="M9 12h6M9 16h6M9 8h6M5 3h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />, title: "AG-format exports", desc: "Auditor-General reporting, built in" },
      { icon: <path d="M18 20V10M12 20V4M6 20v-6" />, title: "Multi-department budgets", desc: "Track spend across every department" },
      { icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />, title: "Digital leave management", desc: "No more paper forms or email chains" },
      { icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />, title: "Procurement workflows", desc: "Purchase orders tracked start to finish" },
      { icon: <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />, title: "Audit trail & compliance", desc: "Every action logged, nothing lost" },
      { icon: <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3" />, title: "Real-time reporting", desc: "Live dashboards across every department" },
    ],
  },
};

export default function SolutionsClient() {
  const [active, setActive] = useState<ProductKey>("biprapay");
  const product = PRODUCTS[active];

  return (
    <div id="page-solutions" className="page active pw">
    <section className="section mesh-light" style={{paddingTop:"100px"}}>
      <div className="inner-n" style={{textAlign:"center"}}>
        <p className="slabel" style={{textAlign:"center"}}>Solutions</p>
        <h1 style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(36px,5vw,56px)",fontWeight:"800",letterSpacing:"-1.5px",marginBottom:"16px",lineHeight:"1.08"}}>Built for <span className="grad-text">your industry</span></h1>
        <p style={{fontSize:"17px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"0",fontWeight:"300"}}>BIPRA adapts to the specific compliance, workflow, and payment needs of your sector.</p>
        <div className="solutions-orbit">
          <div className="solutions-orbit-item float-anim-slow">
            <div className="solutions-orbit-icon" style={{background: PRODUCTS.biprapay.gradient, boxShadow: `0 12px 28px ${PRODUCTS.biprapay.accent}40`}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div className="solutions-orbit-name">BipraPay</div>
            <div className="solutions-orbit-tag">Payments</div>
          </div>
          <div className="solutions-orbit-item float-anim">
            <div className="solutions-orbit-icon" style={{background: PRODUCTS.veribills.gradient, boxShadow: `0 12px 28px ${PRODUCTS.veribills.accent}40`}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13h6M9 17h6"></path></svg>
            </div>
            <div className="solutions-orbit-name">VeriBills</div>
            <div className="solutions-orbit-tag">Billing</div>
          </div>
          <div className="solutions-orbit-item float-anim-delay">
            <div className="solutions-orbit-icon" style={{background: PRODUCTS.morr.gradient, boxShadow: `0 12px 28px ${PRODUCTS.morr.accent}40`}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path></svg>
            </div>
            <div className="solutions-orbit-name">Morr ERP</div>
            <div className="solutions-orbit-tag">Workflow</div>
          </div>
        </div>
      </div>
    </section>

    <section className="section"><div className="inner">
      <p className="slabel" style={{textAlign:"center"}}>Every product, every capability</p>
      <h2 className="stitle" style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 48px"}}>One platform, three engines</h2>
      <div className="solutions-mega">
        <div className="solutions-tabs">
          {(Object.keys(PRODUCTS) as ProductKey[]).map((key) => {
            const p = PRODUCTS[key];
            return (
              <button key={key} className={`solutions-tab${active === key ? " active" : ""}`} onClick={() => setActive(key)} style={active === key ? { borderColor: p.accent } as React.CSSProperties : undefined}>
                <span>
                  <span className="solutions-tab-name">{p.name}</span>
                  <span className="solutions-tab-tag">{p.tag}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="solutions-grid">
          {product.features.map((f, i) => (
            <div key={i} className="solutions-feature">
              <span className="solutions-feature-icon" style={{background: product.gradient, boxShadow: `0 8px 16px ${product.accent}33`}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
              </span>
              <div>
                <div className="solutions-feature-title">{f.title}</div>
                <div className="solutions-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></section>

    <section className="section"><div className="inner">
      <div style={{display:"flex",flexDirection:"column",gap:"32px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"center",borderRadius:"20px",border:"1px solid var(--border)",padding:"48px"}} className="two-col solutions-ind-card mesh-light cine-reveal s1 tilt shine">
          <svg className="solutions-ind-watermark" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="1.5"><path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-6 10 6"></path></svg>
          <div><div className="solutions-ind-icon" style={{background:"linear-gradient(135deg,#5533FF,#7B5FFF)",boxShadow:"0 8px 20px rgba(85,51,255,0.28)"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-6 10 6"></path></svg></div><span className="badge b-p" style={{marginBottom:"16px"}}>Financial Services</span><h2 style={{fontSize:"28px",fontWeight:"800",letterSpacing:"-.5px",marginBottom:"14px",lineHeight:"1.2"}}>Banks, fintechs &amp; lenders</h2><p style={{fontSize:"15px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"20px"}}>From payment processing to audit-ready financial reporting, BIPRA gives financial institutions a compliant, scalable infrastructure layer.</p><ul className="flist"><li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>SARB-compliant payment rails</li><li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>Real-time AML transaction screening</li><li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>IFRS 9 provisioning reports</li><li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>Multi-currency nostro management</li></ul><Link className="btn btn-p btn-lg" style={{marginTop:"24px"}} href="/contact">Talk to us</Link></div>
          <div style={{background:"rgba(255,255,255,0.6)",borderRadius:"14px",padding:"28px"}}><div style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"16px"}}>Products used</div><div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}><span className="badge b-r">BipraPay</span><span className="badge b-vb">VeriBills</span></div><div style={{height:"1px",background:"var(--border)",margin:"20px 0"}}></div><div style={{fontSize:"13px",color:"var(--muted)",marginBottom:"12px"}}>Typical deployment</div><div style={{fontSize:"24px",fontWeight:"800",color:"var(--ink)"}}>3–5 days</div></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"center",borderRadius:"20px",border:"1px solid var(--border)",padding:"48px"}} className="two-col solutions-ind-card mesh-cool cine-reveal s2 tilt shine">
          <svg className="solutions-ind-watermark" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#0A7B3E" strokeWidth="1.5"><path d="M12 2 3 7l9 5 9-5-9-5zM3 7v10l9 5 9-5V7"></path></svg>
          <div style={{background:"rgba(255,255,255,0.6)",borderRadius:"14px",padding:"28px"}}><div style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"16px"}}>Products used</div><div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}><span className="badge b-morr">Morr ERP</span><span className="badge b-vb">VeriBills</span></div><div style={{height:"1px",background:"var(--border)",margin:"20px 0"}}></div><div style={{fontSize:"13px",color:"var(--muted)",marginBottom:"12px"}}>Typical deployment</div><div style={{fontSize:"24px",fontWeight:"800",color:"var(--ink)"}}>5–7 days</div></div>
          <div><div className="solutions-ind-icon" style={{background:"linear-gradient(135deg,#0A7B3E,#00C87A)",boxShadow:"0 8px 20px rgba(10,123,62,0.28)"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 7l9 5 9-5-9-5zM3 7v10l9 5 9-5V7"></path></svg></div><span className="badge b-g" style={{marginBottom:"16px"}}>Government &amp; Public Sector</span><h2 style={{fontSize:"28px",fontWeight:"800",letterSpacing:"-.5px",marginBottom:"14px",lineHeight:"1.2"}}>Departments &amp; municipalities</h2><p style={{fontSize:"15px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"20px"}}>Manage budgets across departments, process citizen payments, and maintain compliance with PFMA and MFMA requirements.</p><ul className="flist"><li className="fitem"><span className="fcheck" style={{background:"var(--gl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#0A7B3E" strokeWidth="1.8"></polyline></svg></span>PFMA / MFMA budget compliance</li><li className="fitem"><span className="fcheck" style={{background:"var(--gl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#0A7B3E" strokeWidth="1.8"></polyline></svg></span>Auditor-General export formats</li><li className="fitem"><span className="fcheck" style={{background:"var(--gl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#0A7B3E" strokeWidth="1.8"></polyline></svg></span>Grant disbursement to beneficiaries</li><li className="fitem"><span className="fcheck" style={{background:"var(--gl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#0A7B3E" strokeWidth="1.8"></polyline></svg></span>Digital document management</li></ul><Link className="btn btn-g btn-lg" style={{marginTop:"24px"}} href="/contact">Talk to us</Link></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"center",borderRadius:"20px",border:"1px solid var(--border)",padding:"48px"}} className="two-col solutions-ind-card mesh-warm cine-reveal s3 tilt shine">
          <svg className="solutions-ind-watermark" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#E8152A" strokeWidth="1.5"><path d="M6 8h12l1 12H5zM9 8V6a3 3 0 0 1 6 0v2"></path></svg>
          <div><div className="solutions-ind-icon" style={{background:"linear-gradient(135deg,#E8152A,#FF6B35)",boxShadow:"0 8px 20px rgba(232,21,42,0.28)"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h12l1 12H5zM9 8V6a3 3 0 0 1 6 0v2"></path></svg></div><span className="badge b-r" style={{marginBottom:"16px"}}>Retail &amp; E-commerce</span><h2 style={{fontSize:"28px",fontWeight:"800",letterSpacing:"-.5px",marginBottom:"14px",lineHeight:"1.2"}}>Online &amp; omnichannel retailers</h2><p style={{fontSize:"15px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"20px"}}>Accept payments at speed, automate supplier invoice processing, and close month-end in a single day with integrated billing and reconciliation.</p><ul className="flist"><li className="fitem"><span className="fcheck" style={{background:"var(--rl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#E8152A" strokeWidth="1.8"></polyline></svg></span>Instant checkout via BipraPay</li><li className="fitem"><span className="fcheck" style={{background:"var(--rl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#E8152A" strokeWidth="1.8"></polyline></svg></span>Automated supplier payments</li><li className="fitem"><span className="fcheck" style={{background:"var(--rl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#E8152A" strokeWidth="1.8"></polyline></svg></span>Commission &amp; affiliate payouts</li><li className="fitem"><span className="fcheck" style={{background:"var(--rl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#E8152A" strokeWidth="1.8"></polyline></svg></span>Real-time revenue reconciliation</li></ul><Link className="btn btn-r btn-lg" style={{marginTop:"24px"}} href="/contact">Talk to us</Link></div>
          <div style={{background:"rgba(255,255,255,0.6)",borderRadius:"14px",padding:"28px"}}><div style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"16px"}}>Products used</div><div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}><span className="badge b-r">BipraPay</span><span className="badge b-vb">VeriBills</span></div><div style={{height:"1px",background:"var(--border)",margin:"20px 0"}}></div><div style={{fontSize:"13px",color:"var(--muted)",marginBottom:"12px"}}>Typical deployment</div><div style={{fontSize:"24px",fontWeight:"800",color:"var(--ink)"}}>1–2 days</div></div>
        </div>
      </div>
    </div></section>


    <section className="section" style={{background:"var(--off)"}}><div className="inner">
      <p className="slabel" style={{textAlign:"center"}}>Integrations</p>
      <h2 className="stitle" style={{textAlign:"center",maxWidth:"500px",margin:"0 auto 48px"}}>Connects with the tools you already use</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"16px"}} id="integrations-grid">
        {[
          { name: "Xero", tag: "Accounting", letter: "X", gradient: "linear-gradient(135deg,#5533FF,#7B5FFF)" },
          { name: "Sage", tag: "ERP", letter: "S", gradient: "linear-gradient(135deg,#0A7B3E,#00C87A)" },
          { name: "Salesforce", tag: "CRM", letter: "SF", gradient: "linear-gradient(135deg,#00C1D4,#5533FF)" },
          { name: "SAP", tag: "Enterprise", letter: "SAP", gradient: "linear-gradient(135deg,#3D22CC,#5533FF)" },
          { name: "Slack", tag: "Notifications", letter: "SL", gradient: "linear-gradient(135deg,#E8152A,#FF6B35)" },
          { name: "Zapier", tag: "Automation", letter: "Z", gradient: "linear-gradient(135deg,#FF6B35,#FFB020)" },
        ].map((integ) => (
          <div key={integ.name} className="gcard shine grid-pop tilt" style={{borderRadius:"12px",padding:"20px",textAlign:"center"}}>
            <div className="solutions-int-badge" style={{background: integ.gradient, fontSize: integ.letter.length > 2 ? "11px" : "15px"}}>{integ.letter}</div>
            <div style={{fontSize:"13px",fontWeight:"700",color:"var(--ink)"}}>{integ.name}</div>
            <div style={{fontSize:"11px",color:"var(--muted)",marginTop:"2px"}}>{integ.tag}</div>
          </div>
        ))}
      </div>
      <p style={{textAlign:"center",fontSize:"13px",color:"var(--muted)",marginTop:"20px"}}>+ REST API for custom integrations with any system &middot; <Link href="/integrations" style={{color:"var(--p)",fontWeight:"600"}}>Browse all integrations →</Link></p>
    </div></section>
    <section className="solutions-cta" style={{background:"var(--ink)",padding:"80px 5%",textAlign:"center"}}>
      <div className="solutions-cta-glow blob-drift" style={{width:"420px",height:"420px",top:"-160px",left:"-100px",background:"radial-gradient(circle,rgba(85,51,255,0.35),transparent 70%)"}}></div>
      <div className="solutions-cta-glow blob-drift" style={{width:"360px",height:"360px",bottom:"-140px",right:"-80px",background:"radial-gradient(circle,rgba(232,21,42,0.25),transparent 70%)",animationDelay:"3s"}}></div>
      <div className="inner-n"><h2 style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(26px,3vw,38px)",fontWeight:"800",color:"#fff",letterSpacing:"-.8px",marginBottom:"16px"}}>Find the right solution for your business</h2><p style={{fontSize:"16px",color:"rgba(255,255,255,0.4)",marginBottom:"36px"}}>Our team will map BIPRA to your exact industry requirements.</p><div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}><Link className="btn btn-w btn-lg" href="/contact">Book a consultation</Link><Link className="btn btn-ow btn-lg" href="/pricing">View pricing</Link></div></div>
    </section>
    </div>
  );
}
