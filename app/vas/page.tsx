import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Value-Added Services",
  description: "Prepaid airtime and data, prepaid electricity, bill payments, digital vouchers, and travel ticketing — add-on revenue lines that run on BIPRA's existing rails.",
};

export default function Page() {
  return (
    <div id="page-vas" className="page active pw">
    <section className="section" style={{paddingTop:"100px",background:"linear-gradient(135deg,#FFF6F0 0%,#fff 60%)"}}>
    <div className="inner two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
    <div>
      <p style={{fontSize:"11px",fontWeight:"600",letterSpacing:"1.2px",textTransform:"uppercase",color:"var(--r)",marginBottom:"16px"}}>Value-Added Services</p>
      <h1 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,4.5vw,54px)",fontWeight:"800",lineHeight:"1.07",letterSpacing:"-1.5px",marginBottom:"20px"}}>One integration,<br /><span className="grad-text-warm">five new revenue lines</span></h1>
      <p style={{fontSize:"17px",color:"var(--muted)",lineHeight:"1.75",maxWidth:"460px",marginBottom:"36px",fontWeight:"300"}}>Layer prepaid airtime, electricity, bill payments, vouchers, and travel ticketing on top of the BipraPay and VeriBills rails you already run — no separate vendor, no separate reconciliation.</p>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}><Link className="btn btn-r btn-lg" href="/contact">Get started</Link><Link className="btn btn-o btn-lg" href="/pricing">View pricing</Link></div>
    </div>
    <div style={{background:"var(--ink)",borderRadius:"20px",padding:"32px",boxShadow:"var(--sh)"}}>
      <div style={{fontSize:"12px",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"20px"}}>Add-on services</div>
      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",background:"rgba(255,255,255,0.04)",borderRadius:"12px"}}><span style={{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#FF6B35,#E8152A)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></span><span style={{fontSize:"14px",fontWeight:"600",color:"#fff"}}>Prepaid Airtime and Data</span></div>
        <div style={{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",background:"rgba(255,255,255,0.04)",borderRadius:"12px"}}><span style={{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#0A7B3E,#00C87A)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></span><span style={{fontSize:"14px",fontWeight:"600",color:"#fff"}}>Prepaid Electricity</span></div>
        <div style={{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",background:"rgba(255,255,255,0.04)",borderRadius:"12px"}}><span style={{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#5533FF,#7B5FFF)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg></span><span style={{fontSize:"14px",fontWeight:"600",color:"#fff"}}>Bill Payments</span></div>
        <div style={{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",background:"rgba(255,255,255,0.04)",borderRadius:"12px"}}><span style={{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#3D22CC,#5533FF)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4z"></path></svg></span><span style={{fontSize:"14px",fontWeight:"600",color:"#fff"}}>Digital Vouchers</span></div>
        <div style={{display:"flex",alignItems:"center",gap:"14px",padding:"14px 16px",background:"rgba(255,255,255,0.04)",borderRadius:"12px"}}><span style={{width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#E8152A,#FF6B35)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M3 11l19-9-9 19-2-8-8-2z"></path></svg></span><span style={{fontSize:"14px",fontWeight:"600",color:"#fff"}}>Travel Ticketing</span></div>
      </div>
    </div>
    </div></section>

    <section className="section"><div className="inner">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"start"}} className="two-col">
        <div>
          <p className="slabel">Built on rails you already run</p>
          <h2 className="stitle">A turnkey layer for every add-on service</h2>
          <p style={{fontSize:"16px",color:"var(--muted)",lineHeight:"1.8",marginBottom:"24px"}}>Meet customer expectations with a full suite of value-added services, without onboarding a separate vendor for each one.</p>
          <ul className="flist">
            <li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>Handle increasing volumes with high-speed, large-scale transaction processing</li>
            <li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>Every add-on routes through BipraPay's orchestration, so failover and reconciliation are automatic</li>
            <li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>Real-time transaction monitoring, reporting, and alerts across every service</li>
          </ul>
          <Link className="btn btn-p btn-lg" style={{marginTop:"28px"}} href="/contact">Talk to us</Link>
        </div>
        <div>
          <details style={{borderBottom:"1px solid var(--border)",padding:"20px 0"}}><summary style={{fontFamily:"var(--fd)",fontSize:"16px",fontWeight:"600",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Prepaid Airtime and Data<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><p style={{fontSize:"14px",color:"var(--muted)",lineHeight:"1.75",marginTop:"12px"}}>Top up any major South African network in real time, with automatic float management and instant confirmation back to your customer.</p></details>
          <details style={{borderBottom:"1px solid var(--border)",padding:"20px 0"}}><summary style={{fontFamily:"var(--fd)",fontSize:"16px",fontWeight:"600",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Prepaid Electricity<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><p style={{fontSize:"14px",color:"var(--muted)",lineHeight:"1.75",marginTop:"12px"}}>STS-compliant token vending for prepaid electricity, powered by the same smart-metering engine behind VeriBills.</p></details>
          <details style={{borderBottom:"1px solid var(--border)",padding:"20px 0"}}><summary style={{fontFamily:"var(--fd)",fontSize:"16px",fontWeight:"600",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Bill Payments<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><p style={{fontSize:"14px",color:"var(--muted)",lineHeight:"1.75",marginTop:"12px"}}>Let customers settle municipal, insurance, and subscription bills from inside your app — reconciled automatically against BipraPay.</p></details>
          <details style={{borderBottom:"1px solid var(--border)",padding:"20px 0"}}><summary style={{fontFamily:"var(--fd)",fontSize:"16px",fontWeight:"600",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Digital Vouchers<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><p style={{fontSize:"14px",color:"var(--muted)",lineHeight:"1.75",marginTop:"12px"}}>Issue and redeem gift cards, airtime vouchers, and retail credit — all tracked against a single ledger.</p></details>
          <details style={{borderBottom:"1px solid var(--border)",padding:"20px 0"}}><summary style={{fontFamily:"var(--fd)",fontSize:"16px",fontWeight:"600",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Travel Ticketing<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><p style={{fontSize:"14px",color:"var(--muted)",lineHeight:"1.75",marginTop:"12px"}}>Bus, rail, and toll payments processed through the same rails as everything else on BIPRA.</p></details>
        </div>
      </div>
    </div></section>

    <section className="section"><div className="inner">
      <p className="slabel">Backed by real people</p>
      <h2 className="stitle">Support that comes standard, not as an add-on</h2>
      <p className="ssub">Every VAS deployment ships with a live call centre, online support, and a named account manager — not a ticket queue.</p>
      <div className="g3" style={{gap:"20px"}}>
        <div className="gcard shine grid-pop pop1 tilt" style={{borderRadius:"14px",padding:"24px"}}>
          <div style={{width:"44px",height:"44px",borderRadius:"12px",background:"linear-gradient(135deg,#E8152A,#FF6B35)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"14px",boxShadow:"0 8px 16px rgba(232,21,42,0.25)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
          <div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px"}}>Call centre</div>
          <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>A live, South African-based call centre for your customers and your team — not an offshore script.</p>
        </div>
        <div className="gcard shine grid-pop pop2 tilt" style={{borderRadius:"14px",padding:"24px"}}>
          <div style={{width:"44px",height:"44px",borderRadius:"12px",background:"linear-gradient(135deg,#5533FF,#7B5FFF)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"14px",boxShadow:"0 8px 16px rgba(85,51,255,0.25)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
          <div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px"}}>Online support</div>
          <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>Live chat and ticketing built into every portal, so issues get logged, tracked, and resolved without a phone call.</p>
        </div>
        <div className="gcard shine grid-pop pop3 tilt" style={{borderRadius:"14px",padding:"24px"}}>
          <div style={{width:"44px",height:"44px",borderRadius:"12px",background:"linear-gradient(135deg,#0A7B3E,#00C87A)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"14px",boxShadow:"0 8px 16px rgba(10,123,62,0.25)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
          <div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px"}}>Dedicated account manager</div>
          <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>One named contact who knows your setup, your volumes, and your history — not a rotating support queue.</p>
        </div>
      </div>
      <div style={{marginTop:"24px",padding:"20px 24px",background:"var(--gl)",borderRadius:"14px",display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"}}>
        <span style={{width:"36px",height:"36px",borderRadius:"10px",background:"var(--g)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg></span>
        <span style={{fontSize:"14px",color:"var(--g)",fontWeight:"600"}}>VeriBills customers get a 24-hour call centre and support line, so meter and billing queries never wait for business hours.</span>
      </div>
    </div></section>

    <section className="section" style={{background:"var(--off)"}}>
      <div className="inner">
        <p className="slabel" style={{textAlign:"center"}}>Why BIPRA VAS</p>
        <h2 className="stitle" style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 16px"}}>Add-on revenue, enterprise-grade infrastructure</h2>
        <p className="ssub" style={{textAlign:"center",margin:"0 auto 48px"}}>Every service above runs on the same compliant, audited rails as the rest of BIPRA.</p>
        <div className="g4" style={{gap:"16px"}}>
          <div className="gcard shine grid-pop pop1 tilt" style={{borderRadius:"14px",padding:"24px",textAlign:"center"}}>
            <div style={{width:"48px",height:"48px",borderRadius:"12px",background:"linear-gradient(135deg,var(--p),#7B5FFF)",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 16px rgba(85,51,255,0.25)"}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
            <div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>PCI-DSS Level 1</div>
            <div style={{fontSize:"12px",color:"var(--muted)"}}>Highest card data security certification</div>
          </div>
          <div className="gcard shine grid-pop pop2 tilt" style={{borderRadius:"14px",padding:"24px",textAlign:"center"}}>
            <div style={{width:"48px",height:"48px",borderRadius:"12px",background:"linear-gradient(135deg,#0A7B3E,#00C87A)",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 16px rgba(10,123,62,0.25)"}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><polyline points="9,12 11,14 15,10"></polyline></svg></div>
            <div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>ISO 27001</div>
            <div style={{fontSize:"12px",color:"var(--muted)"}}>Information security management</div>
          </div>
          <div className="gcard shine grid-pop pop3 tilt" style={{borderRadius:"14px",padding:"24px",textAlign:"center"}}>
            <div style={{width:"48px",height:"48px",borderRadius:"12px",background:"linear-gradient(135deg,#E8152A,#FF6B35)",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 16px rgba(232,21,42,0.25)"}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg></div>
            <div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>99.99% Uptime</div>
            <div style={{fontSize:"12px",color:"var(--muted)"}}>SLA-backed availability guarantee</div>
          </div>
          <div className="gcard shine grid-pop pop4 tilt" style={{borderRadius:"14px",padding:"24px",textAlign:"center"}}>
            <div style={{width:"48px",height:"48px",borderRadius:"12px",background:"linear-gradient(135deg,#3D22CC,#5533FF)",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 16px rgba(85,51,255,0.25)"}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
            <div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>SARB Licensed</div>
            <div style={{fontSize:"12px",color:"var(--muted)"}}>Regulated South African payment rails</div>
          </div>
        </div>
      </div>
    </section>

    <section style={{background:"var(--r)",padding:"80px 5%",textAlign:"center"}}><div className="inner-n"><h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(26px,3vw,38px)",fontWeight:"800",color:"#fff",letterSpacing:"-.8px",marginBottom:"16px"}}>Ready to add new revenue lines?</h2><p style={{fontSize:"16px",color:"rgba(255,255,255,0.6)",marginBottom:"36px"}}>Turn on prepaid, bill payments, vouchers, and ticketing without a new integration.</p><div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}><Link className="btn btn-w btn-lg" href="/contact">Book a demo</Link><Link className="btn btn-ow btn-lg" href="/pricing">See pricing</Link></div></div></section>
    </div>
  );
}
