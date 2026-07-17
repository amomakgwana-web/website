import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexCore ERP",
  description: "Budgeting, HR, and document management unified on one data model.",
};

export default function Page() {
  return (
    <div id="page-nexcore" className="page active pw">
    <section className="section" style={{paddingTop:"100px",background:"linear-gradient(135deg,var(--px) 0%,#fff 50%)"}}>
    <div className="inner two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
    <div>
      <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"}}><div style={{width:"48px",height:"48px",borderRadius:"13px",background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8"></rect></svg></div><span style={{fontFamily:"var(--fd)",fontWeight:"700",fontSize:"15px",color:"var(--p)"}}>NexCore ERP</span></div>
      <h1 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,4.5vw,54px)",fontWeight:"800",lineHeight:"1.07",letterSpacing:"-1.5px",marginBottom:"20px"}}>The enterprise OS<br />for <span className="grad-text">modern teams</span></h1>
      <p style={{fontSize:"17px",color:"var(--muted)",lineHeight:"1.75",maxWidth:"460px",marginBottom:"36px",fontWeight:"300"}}>Budgeting, HR, and digital document management — unified in a single intelligent platform that replaces spreadsheets.</p>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}><Link className="btn btn-p btn-lg" href="/contact">Request a demo</Link><Link className="btn btn-o btn-lg" href="/pricing">View pricing</Link></div>
    </div>
    <div style={{background:"var(--ink)",borderRadius:"20px",padding:"24px",boxShadow:"var(--sh)"}}>
      <div style={{display:"flex",gap:"0",background:"rgba(255,255,255,0.06)",borderRadius:"8px",padding:"3px",marginBottom:"20px"}}><div style={{flex:"1",textAlign:"center",padding:"7px",borderRadius:"6px",fontSize:"12px",fontWeight:"600",background:"var(--p)",color:"#fff"}}>Budgets</div><div style={{flex:"1",textAlign:"center",padding:"7px",fontSize:"12px",fontWeight:"600",color:"rgba(255,255,255,0.4)"}}>HR</div><div style={{flex:"1",textAlign:"center",padding:"7px",fontSize:"12px",fontWeight:"600",color:"rgba(255,255,255,0.4)"}}>Documents</div></div>
      <div style={{fontSize:"11px",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"12px"}}>FY2025 Budget Tracking</div>
      <div style={{marginBottom:"10px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}><span style={{fontSize:"12px",color:"rgba(255,255,255,0.7)"}}>Engineering</span><span style={{fontSize:"12px",color:"rgba(255,255,255,0.4)"}}>R1.8M / R2.4M</span></div><div style={{height:"6px",background:"rgba(255,255,255,0.08)",borderRadius:"3px"}}><div style={{height:"100%",width:"75%",borderRadius:"3px",background:"var(--p)"}}></div></div></div>
      <div style={{marginBottom:"10px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}><span style={{fontSize:"12px",color:"rgba(255,255,255,0.7)"}}>Sales &amp; Marketing</span><span style={{fontSize:"12px",color:"rgba(255,255,255,0.4)"}}>R0.6M / R1.1M</span></div><div style={{height:"6px",background:"rgba(255,255,255,0.08)",borderRadius:"3px"}}><div style={{height:"100%",width:"55%",borderRadius:"3px",background:"var(--p)"}}></div></div></div>
      <div style={{marginBottom:"10px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}><span style={{fontSize:"12px",color:"rgba(255,255,255,0.7)"}}>Operations</span><span style={{fontSize:"12px",color:"rgba(255,255,255,0.4)"}}>R720K / R800K</span></div><div style={{height:"6px",background:"rgba(255,255,255,0.08)",borderRadius:"3px"}}><div style={{height:"100%",width:"90%",borderRadius:"3px",background:"var(--r)"}}></div></div></div>
      <div style={{marginBottom:"20px"}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}><span style={{fontSize:"12px",color:"rgba(255,255,255,0.7)"}}>HR &amp; Admin</span><span style={{fontSize:"12px",color:"rgba(255,255,255,0.4)"}}>R190K / R450K</span></div><div style={{height:"6px",background:"rgba(255,255,255,0.08)",borderRadius:"3px"}}><div style={{height:"100%",width:"42%",borderRadius:"3px",background:"var(--p)"}}></div></div></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}><div style={{background:"rgba(255,255,255,0.05)",borderRadius:"8px",padding:"12px",textAlign:"center"}}><div style={{fontFamily:"var(--fd)",fontSize:"20px",fontWeight:"700",color:"#fff",marginBottom:"3px"}}>247</div><div style={{fontSize:"10px",color:"rgba(255,255,255,0.4)"}}>Active staff</div></div><div style={{background:"rgba(255,255,255,0.05)",borderRadius:"8px",padding:"12px",textAlign:"center"}}><div style={{fontFamily:"var(--fd)",fontSize:"20px",fontWeight:"700",color:"#fff",marginBottom:"3px"}}>14</div><div style={{fontSize:"10px",color:"rgba(255,255,255,0.4)"}}>Pending</div></div><div style={{background:"rgba(255,255,255,0.05)",borderRadius:"8px",padding:"12px",textAlign:"center"}}><div style={{fontFamily:"var(--fd)",fontSize:"20px",fontWeight:"700",color:"#fff",marginBottom:"3px"}}>1,429</div><div style={{fontSize:"10px",color:"rgba(255,255,255,0.4)"}}>Documents</div></div></div>
    </div>
    </div></section>
    <section className="section" style={{background:"var(--off)"}}><div className="inner"><p className="slabel">Modules</p><h2 className="stitle">Three modules, one platform</h2><p className="ssub">Use them individually or as an integrated suite.</p>
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div className="gcard-deep shine grid-pop tilt" style={{borderRadius:"20px",padding:"40px"}}><span className="badge b-p" style={{marginBottom:"14px"}}>Budgeting</span><div style={{fontFamily:"var(--fd)",fontSize:"24px",fontWeight:"700",marginBottom:"12px",letterSpacing:"-.5px",lineHeight:"1.2"}}>Smart budgeting &amp; financial planning</div><p style={{fontSize:"15px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"20px"}}>Create, approve, and track budgets with multi-level approval workflows, variance reporting, and real-time actuals comparison.</p><ul className="flist"><li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>Multi-level approval workflows</li><li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>Real-time budget vs actuals</li><li className="fitem"><span className="fcheck"><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#5533FF" strokeWidth="1.8"></polyline></svg></span>Forecast &amp; scenario planning</li></ul></div>
      <div className="gcard-deep shine grid-pop tilt" style={{borderRadius:"20px",padding:"40px"}}><span className="badge b-r" style={{marginBottom:"14px"}}>Human Resources</span><div style={{fontFamily:"var(--fd)",fontSize:"24px",fontWeight:"700",marginBottom:"12px",letterSpacing:"-.5px",lineHeight:"1.2"}}>Complete HR lifecycle management</div><p style={{fontSize:"15px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"20px"}}>From onboarding to offboarding — manage your entire workforce in one place with compliance built in.</p><ul className="flist"><li className="fitem"><span className="fcheck" style={{background:"var(--rl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#E8152A" strokeWidth="1.8"></polyline></svg></span>Employee records &amp; org chart</li><li className="fitem"><span className="fcheck" style={{background:"var(--rl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#E8152A" strokeWidth="1.8"></polyline></svg></span>Leave management &amp; approvals</li><li className="fitem"><span className="fcheck" style={{background:"var(--rl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#E8152A" strokeWidth="1.8"></polyline></svg></span>Payroll integration &amp; tax compliance</li></ul></div>
      <div className="gcard-deep shine grid-pop tilt" style={{borderRadius:"20px",padding:"40px"}}><span className="badge b-g" style={{marginBottom:"14px"}}>Digital Documents</span><div style={{fontFamily:"var(--fd)",fontSize:"24px",fontWeight:"700",marginBottom:"12px",letterSpacing:"-.5px",lineHeight:"1.2"}}>Paperless document management</div><p style={{fontSize:"15px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"20px"}}>Replace paper-based processes with intelligent digital workflows — approvals, signatures, and archiving all automated.</p><ul className="flist"><li className="fitem"><span className="fcheck" style={{background:"var(--gl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#0A7B3E" strokeWidth="1.8"></polyline></svg></span>Digital signatures &amp; approvals</li><li className="fitem"><span className="fcheck" style={{background:"var(--gl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#0A7B3E" strokeWidth="1.8"></polyline></svg></span>Document version control</li><li className="fitem"><span className="fcheck" style={{background:"var(--gl)"}}><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="#0A7B3E" strokeWidth="1.8"></polyline></svg></span>Automated retention policies</li></ul></div>
    </div></div></section>

    <section className="section"><div className="inner">
    <p className="slabel">Module deep-dive</p>
    <h2 className="stitle">Three powerful modules, one data model</h2>
    <p className="ssub">All modules share the same employee, budget, and document records — no re-entering data across systems.</p>
    <div style={{overflowX:"auto",background:"#fff",borderRadius:"16px",border:"1px solid var(--border)"}}>
    <table className="feat-table">
    <thead><tr><th style={{width:"30%"}}>Capability</th><th style={{textAlign:"center",width:"23%"}}>Budgeting</th><th style={{textAlign:"center",width:"23%"}}>HR</th><th style={{textAlign:"center",width:"24%"}}>Documents</th></tr></thead>
    <tbody>
    <tr><td>Multi-level approvals</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
    <tr><td>Real-time dashboards</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
    <tr><td>Audit trail</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
    <tr><td>PFMA / MFMA compliance</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}>–</td></tr>
    <tr><td>Variance &amp; forecast reports</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}>–</td></tr>
    <tr><td>Payroll integration</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}>–</td></tr>
    <tr><td>Leave &amp; attendance</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}>–</td></tr>
    <tr><td>Performance cycles</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td><td style={{textAlign:"center"}}>–</td></tr>
    <tr><td>Digital signatures</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
    <tr><td>Version control</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
    <tr><td>Retention policies</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
    <tr><td>Full-text search</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}>–</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
    </tbody></table></div>
    </div></section>

    <section className="section" style={{background:"var(--off)"}}><div className="inner">
    <p className="slabel">Typical time savings</p>
    <h2 className="stitle">What NexCore replaces in your organisation</h2>
    <div className="g3" style={{gap:"20px"}}>
    <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}>
    <div style={{fontSize:"13px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"16px"}}>Budget approval cycle</div>
    <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"8px"}}>
    <div style={{flex:"1"}}><div style={{fontSize:"11px",color:"var(--muted)",marginBottom:"4px"}}>Before NexCore</div><div style={{height:"10px",background:"var(--rl)",borderRadius:"5px",position:"relative"}}><div style={{position:"absolute",right:"0",top:"-18px",fontSize:"11px",fontWeight:"700",color:"var(--r)"}}>14 days</div></div></div>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
    <div style={{flex:"1"}}><div style={{fontSize:"11px",color:"var(--muted)",marginBottom:"4px"}}>With NexCore</div><div style={{height:"10px",background:"var(--gl)",borderRadius:"5px",width:"20%",position:"relative"}}><div style={{position:"absolute",right:"-28px",top:"-18px",fontSize:"11px",fontWeight:"700",color:"var(--g)"}}>3 days</div></div></div>
    </div>
    <p style={{fontSize:"12px",color:"var(--muted)",marginTop:"20px",lineHeight:"1.5"}}>Digital approval routing eliminates email chains and manual follow-ups.</p>
    </div>
    <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}>
    <div style={{fontSize:"13px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"16px"}}>HR document processing</div>
    <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"8px"}}>
    <div style={{flex:"1"}}><div style={{fontSize:"11px",color:"var(--muted)",marginBottom:"4px"}}>Before NexCore</div><div style={{height:"10px",background:"var(--rl)",borderRadius:"5px",position:"relative"}}><div style={{position:"absolute",right:"0",top:"-18px",fontSize:"11px",fontWeight:"700",color:"var(--r)"}}>2 days</div></div></div>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
    <div style={{flex:"1"}}><div style={{fontSize:"11px",color:"var(--muted)",marginBottom:"4px"}}>With NexCore</div><div style={{height:"10px",background:"var(--gl)",borderRadius:"5px",width:"12%",position:"relative"}}><div style={{position:"absolute",right:"-42px",top:"-18px",fontSize:"11px",fontWeight:"700",color:"var(--g)"}}>20 min</div></div></div>
    </div>
    <p style={{fontSize:"12px",color:"var(--muted)",marginTop:"20px",lineHeight:"1.5"}}>Digital signatures and automated workflow routing replace physical paper processes.</p>
    </div>
    <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}>
    <div style={{fontSize:"13px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"16px"}}>Month-end financial close</div>
    <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"8px"}}>
    <div style={{flex:"1"}}><div style={{fontSize:"11px",color:"var(--muted)",marginBottom:"4px"}}>Before NexCore</div><div style={{height:"10px",background:"var(--rl)",borderRadius:"5px",position:"relative"}}><div style={{position:"absolute",right:"0",top:"-18px",fontSize:"11px",fontWeight:"700",color:"var(--r)"}}>5 days</div></div></div>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
    <div style={{flex:"1"}}><div style={{fontSize:"11px",color:"var(--muted)",marginBottom:"4px"}}>With NexCore</div><div style={{height:"10px",background:"var(--gl)",borderRadius:"5px",width:"16%",position:"relative"}}><div style={{position:"absolute",right:"-38px",top:"-18px",fontSize:"11px",fontWeight:"700",color:"var(--g)"}}>&lt;1 day</div></div></div>
    </div>
    <p style={{fontSize:"12px",color:"var(--muted)",marginTop:"20px",lineHeight:"1.5"}}>Automated budget reconciliation and actuals reporting from a single data source.</p>
    </div>
    </div></div></section>

    <section className="section"><div className="inner-n"><div className="quote-block">
    <p style={{fontSize:"20px",fontWeight:"600",color:"#fff",lineHeight:"1.5",marginBottom:"24px",position:"relative",zIndex:"1"}}>"NexCore replaced our ERP, HR system, and document management tool. Budget approvals that used to take two weeks now happen in 3 days. Our AG audit was the cleanest in 6 years."</p>
    <div style={{display:"flex",alignItems:"center",gap:"14px",position:"relative",zIndex:"1"}}>
    <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"var(--p)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700",color:"#fff",flexShrink:"0"}}>AM</div>
    <div><div style={{fontSize:"14px",fontWeight:"600",color:"#fff"}}>Amara Mensah</div>
    <div style={{fontSize:"12px",color:"rgba(255,255,255,0.45)"}}>Group COO, Ndovu Capital</div></div>
    </div></div></div></section>
    <section style={{background:"var(--ink)",padding:"80px 5%",textAlign:"center"}}><div className="inner-n"><h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(26px,3vw,38px)",fontWeight:"800",color:"#fff",letterSpacing:"-.8px",marginBottom:"16px"}}>Retire the spreadsheets. Run on NexCore.</h2><p style={{fontSize:"16px",color:"rgba(255,255,255,0.4)",marginBottom:"36px"}}>Talk to us about a tailored enterprise deployment.</p><div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}><Link className="btn btn-w btn-lg" href="/contact">Request demo</Link><Link className="btn btn-ow btn-lg" href="/pricing">See pricing</Link></div></div></section>
    </div>
  );
}
