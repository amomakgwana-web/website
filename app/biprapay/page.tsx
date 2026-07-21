import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BipraPay",
  description: "Instant payment gateway with sub-second processing for payroll, bulk disbursements, and supplier payments.",
};

export default function Page() {
  return (
    <div id="page-biprapay" className="page active pw">
    <section className="section" style={{paddingTop:"100px",background:"linear-gradient(135deg,#FFF5F5 0%,#fff 60%)"}}>
    <div className="inner two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
    <div>
      <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"}}><div style={{width:"48px",height:"48px",borderRadius:"13px",overflow:"hidden"}}><img src="/biprapay-logo.png" alt="" style={{width:"48px",height:"48px",objectFit:"cover"}} /></div><span style={{fontFamily:"var(--fd)",fontWeight:"700",fontSize:"15px",color:"var(--r)"}}>BipraPay</span></div>
      <h1 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,4.5vw,54px)",fontWeight:"800",lineHeight:"1.07",letterSpacing:"-1.5px",marginBottom:"20px"}}>Payments at the<br /><span className="grad-text-warm">speed of now</span></h1>
      <p style={{fontSize:"17px",color:"var(--muted)",lineHeight:"1.75",maxWidth:"460px",marginBottom:"36px",fontWeight:"300"}}>Instant payment processing for businesses where every millisecond counts — e-commerce, payroll, mass disbursements.</p>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}><Link className="btn btn-r btn-lg" href="/contact">Get started</Link><Link className="btn btn-o btn-lg" href="/pricing">View pricing</Link></div>
    </div>
    <div style={{background:"var(--ink)",borderRadius:"20px",padding:"32px",textAlign:"center",boxShadow:"var(--sh)"}}>
      <div style={{fontSize:"12px",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"24px"}}>Average processing time</div>
      <div style={{fontFamily:"var(--fd)",fontSize:"80px",fontWeight:"800",letterSpacing:"-3px",lineHeight:"1"}}><span className="grad-text-warm">&lt;800</span><span style={{fontSize:"28px",color:"rgba(255,255,255,0.5)",letterSpacing:"0"}}>ms</span></div>
      <div style={{height:"2px",background:"rgba(255,255,255,0.06)",borderRadius:"2px",margin:"28px 0",position:"relative"}}><div style={{position:"absolute",left:"0",top:"-6px",width:"68%",height:"14px",borderRadius:"7px",background:"var(--r)",opacity:".9"}}></div></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
        <div><div style={{fontFamily:"var(--fd)",fontSize:"20px",fontWeight:"700",color:"#fff",lineHeight:"1",marginBottom:"4px"}}>R12.4M</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>Processed today</div></div>
        <div><div style={{fontFamily:"var(--fd)",fontSize:"20px",fontWeight:"700",color:"#fff",lineHeight:"1",marginBottom:"4px"}}>99.97%</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>Success rate</div></div>
        <div><div style={{fontFamily:"var(--fd)",fontSize:"20px",fontWeight:"700",color:"#fff",lineHeight:"1",marginBottom:"4px"}}>247</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>TPS capacity</div></div>
      </div>
    </div>
    </div></section>

    <section className="section"><div className="inner">
      <div style={{textAlign:"center",marginBottom:"64px"}}>
        <p className="slabel" style={{textAlign:"center"}}>Enterprise payments channel</p>
        <h2 className="stitle" style={{textAlign:"center"}}>One channel, every payment scenario</h2>
        <p style={{fontSize:"16px",color:"var(--muted)",maxWidth:"560px",margin:"16px auto 0",lineHeight:"1.75"}}>From the first API call to funds landing in the recipient&rsquo;s account, BipraPay owns the full path &mdash; nothing gets handed off between disconnected systems.</p>
      </div>
      <div className="channel-diagram grid-pop">
        <div className="channel-frame"><span className="channel-frame-label">BipraPay infrastructure</span></div>
        <div className="channel-row">
          <div className="channel-node"><div className="channel-node-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div><div className="channel-node-title">Corporate client</div><div className="channel-node-desc">Sends a payment instruction via API or dashboard</div></div>
          <div className="channel-node"><div className="channel-node-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--r)" strokeWidth="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div><div className="channel-node-title">Enterprise channel</div><div className="channel-node-desc">Authenticates the request and routes it in</div></div>
          <div className="channel-node"><div className="channel-node-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--r)" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"></path></svg></div><div className="channel-node-title">Payments engine</div><div className="channel-node-desc">Screens, prices, and queues for settlement</div></div>
          <div className="channel-node"><div className="channel-node-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--r)" strokeWidth="1.8"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div><div className="channel-node-title">Industry gateway</div><div className="channel-node-desc">Selects the fastest compliant rail</div></div>
          <div className="channel-node"><div className="channel-node-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--r)" strokeWidth="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div><div className="channel-node-title">BipraPay core</div><div className="channel-node-desc">Executes and confirms in real time</div></div>
          <div className="channel-node"><div className="channel-node-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" strokeWidth="1.8"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 21 7 3 7"></polygon></svg></div><div className="channel-node-title">Payee bank</div><div className="channel-node-desc">Funds land in the recipient&rsquo;s account</div></div>
        </div>
      </div>
    </div></section>

    <section style={{background:"linear-gradient(135deg,#13091e 0%,#0D0B1E 45%,#1f0a14 100%)",padding:"110px 5%",position:"relative",overflow:"hidden"}}>
      <div className="blob-drift" style={{position:"absolute",top:"-120px",right:"-80px",width:"480px",height:"480px",borderRadius:"50%",background:"radial-gradient(circle,rgba(232,21,42,0.18) 0%,transparent 70%)",pointerEvents:"none"}}></div>
      <div className="blob-drift" style={{position:"absolute",bottom:"-140px",left:"-100px",width:"520px",height:"520px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,107,53,0.12) 0%,transparent 70%)",pointerEvents:"none",animationDelay:"4s"}}></div>
      <div className="inner" style={{position:"relative",zIndex:"1"}}>
        <div style={{textAlign:"center",marginBottom:"70px"}}>
          <span className="band-eyebrow cine-reveal" style={{color:"#FF6B6B"}}>Watch a payment move</span>
          <h2 className="cine-reveal s1" style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(30px,4vw,48px)",fontWeight:"800",letterSpacing:"-1.2px",color:"#fff",margin:"18px 0 14px",lineHeight:"1.08"}}>748 milliseconds.<br /><span className="grad-text-warm">Start to settled.</span></h2>
          <p className="cine-reveal s2" style={{fontSize:"16px",color:"rgba(255,255,255,0.45)",maxWidth:"520px",margin:"0 auto",lineHeight:"1.75"}}>This is the actual journey of every BipraPay transaction — replayed live, at real proportional speed.</p>
        </div>
        
        <div style={{position:"relative",maxWidth:"980px",margin:"0 auto"}}>
          
          <div className="streak" style={{top:"18%",left:"0",width:"140px",animationDelay:"0s"}}></div>
          <div className="streak" style={{top:"42%",left:"0",width:"90px",animationDelay:".7s"}}></div>
          <div className="streak" style={{top:"74%",left:"0",width:"120px",animationDelay:"1.4s"}}></div>
          
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",position:"relative"}}>
            
            <div style={{position:"absolute",top:"32px",left:"12%",right:"12%",height:"2px",background:"rgba(255,255,255,0.08)",zIndex:"1"}}>
              <div className="packet" style={{background:"#E8152A",boxShadow:"0 0 14px rgba(232,21,42,0.9)"}}></div>
              <div className="packet d1" style={{background:"#FF6B35",boxShadow:"0 0 14px rgba(255,107,53,0.9)"}}></div>
              <div className="packet d2" style={{background:"#FCD34D",boxShadow:"0 0 14px rgba(252,211,77,0.8)"}}></div>
            </div>
    <div className="cine-reveal" style={{textAlign:"center",position:"relative",zIndex:"2"}}><div className="node-glow-r cine-reveal s1" style={{width:"64px",height:"64px",borderRadius:"18px",background:"#16112e",border:"1px solid #E8152A40",margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8152A" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div><div style={{fontSize:"13px",fontWeight:"700",color:"#fff",marginBottom:"3px"}}>API call received</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>12ms · validated</div></div><div className="cine-reveal" style={{textAlign:"center",position:"relative",zIndex:"2"}}><div className="node-glow-r cine-reveal s2" style={{width:"64px",height:"64px",borderRadius:"18px",background:"#16112e",border:"1px solid #E8152A40",margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8152A" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg></div><div style={{fontSize:"13px",fontWeight:"700",color:"#fff",marginBottom:"3px"}}>Compliance screen</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>48ms · AML cleared</div></div><div className="cine-reveal" style={{textAlign:"center",position:"relative",zIndex:"2"}}><div className="node-glow-r cine-reveal s3" style={{width:"64px",height:"64px",borderRadius:"18px",background:"#16112e",border:"1px solid #E8152A40",margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E8152A" strokeWidth="2"><circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="5" r="3"></circle><path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H12"></path></svg></div><div style={{fontSize:"13px",fontWeight:"700",color:"#fff",marginBottom:"3px"}}>Rail selected</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>8ms · fastest route</div></div><div className="cine-reveal" style={{textAlign:"center",position:"relative",zIndex:"2"}}><div className="node-glow-g cine-reveal s4" style={{width:"64px",height:"64px",borderRadius:"18px",background:"#16112e",border:"1px solid #4ADE8040",margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div style={{fontSize:"13px",fontWeight:"700",color:"#fff",marginBottom:"3px"}}>Bank settled</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>680ms · funds cleared</div></div>      </div>
          
          <div className="cine-reveal s5" style={{marginTop:"56px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"16px",padding:"22px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px"}}>
            <div style={{display:"flex",gap:"36px",flexWrap:"wrap"}}>
              <div><div style={{fontSize:"24px",fontWeight:"800",fontFamily:"'Helvetica Neue',Arial,sans-serif",letterSpacing:"-1px"}} className="grad-text-warm">748ms</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.35)",marginTop:"2px"}}>BipraPay average</div></div>
              <div><div style={{fontSize:"24px",fontWeight:"800",fontFamily:"'Helvetica Neue',Arial,sans-serif",letterSpacing:"-1px",color:"rgba(255,255,255,0.35)"}}>2,200ms</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.25)",marginTop:"2px"}}>Industry average</div></div>
              <div><div style={{fontSize:"24px",fontWeight:"800",fontFamily:"'Helvetica Neue',Arial,sans-serif",letterSpacing:"-1px",color:"#4ADE80"}}>3×</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.35)",marginTop:"2px"}}>Faster than the market</div></div>
            </div>
            <Link className="btn btn-r btn-md" style={{background:"linear-gradient(135deg,#FF6B35,#E8152A)",border:"none"}} href="/contact">Run your first payment</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="section"><div className="inner">
      <p className="slabel">The BipraPay difference</p>
      <h2 className="stitle">How we hit sub-800ms in South Africa</h2>
      <p className="ssub">Speed is an architecture decision. Here's ours.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"start"}} className="two-col">
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{padding:"20px 24px",background:"var(--off)",borderRadius:"14px",borderLeft:"4px solid var(--r)"}}><div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Edge processing nodes</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>Co-located with South African bank clearing infrastructure, eliminating cross-continental latency.</p></div>
          <div style={{padding:"20px 24px",background:"var(--off)",borderRadius:"14px",borderLeft:"4px solid var(--r)"}}><div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Pre-authorisation queuing</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>Bulk payrolls of 50,000 start clearing before the batch is fully submitted.</p></div>
          <div style={{padding:"20px 24px",background:"var(--off)",borderRadius:"14px",borderLeft:"4px solid var(--r)"}}><div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Intelligent rail selection</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>Our router picks the fastest available rail in real time. RTC congested? EFT same-day kicks in automatically.</p></div>
          <div style={{padding:"20px 24px",background:"var(--off)",borderRadius:"14px",borderLeft:"4px solid var(--r)"}}><div style={{fontSize:"14px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Automatic retry with backoff</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>Failed payments retry up to 3 times with exponential backoff. No manual intervention required.</p></div>
        </div>
        <div>
          <div style={{background:"var(--ink)",borderRadius:"16px",padding:"28px",marginBottom:"16px"}}>
            <div style={{fontSize:"11px",fontWeight:"600",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"16px"}}>Response time breakdown</div>
            <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
              <div><div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}><span style={{fontSize:"12px",color:"rgba(255,255,255,0.6)"}}>API validation</span><span style={{fontSize:"12px",color:"#fff"}}>12ms</span></div><div style={{height:"8px",background:"rgba(255,255,255,0.08)",borderRadius:"4px"}}><div style={{height:"100%",width:"3%",borderRadius:"4px",background:"var(--r)"}}></div></div></div>
              <div><div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}><span style={{fontSize:"12px",color:"rgba(255,255,255,0.6)"}}>Compliance screening</span><span style={{fontSize:"12px",color:"#fff"}}>48ms</span></div><div style={{height:"8px",background:"rgba(255,255,255,0.08)",borderRadius:"4px"}}><div style={{height:"100%",width:"14%",borderRadius:"4px",background:"var(--r)"}}></div></div></div>
              <div><div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}><span style={{fontSize:"12px",color:"rgba(255,255,255,0.6)"}}>Rail routing</span><span style={{fontSize:"12px",color:"#fff"}}>8ms</span></div><div style={{height:"8px",background:"rgba(255,255,255,0.08)",borderRadius:"4px"}}><div style={{height:"100%",width:"2%",borderRadius:"4px",background:"var(--r)"}}></div></div></div>
              <div><div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}><span style={{fontSize:"12px",color:"rgba(255,255,255,0.6)"}}>Bank clearing</span><span style={{fontSize:"12px",color:"#fff"}}>680ms</span></div><div style={{height:"8px",background:"rgba(255,255,255,0.08)",borderRadius:"4px"}}><div style={{height:"100%",width:"85%",borderRadius:"4px",background:"rgba(232,21,42,0.5)"}}></div></div></div>
              <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"10px",display:"flex",justifyContent:"space-between"}}><span style={{fontSize:"12px",fontWeight:"700",color:"rgba(255,255,255,0.8)"}}>Total</span><span style={{fontSize:"14px",fontWeight:"800",color:"var(--r)"}}>748ms avg</span></div>
            </div>
          </div>
          <div style={{background:"var(--rl)",borderRadius:"12px",padding:"20px",textAlign:"center"}}><div style={{fontSize:"13px",fontWeight:"600",color:"var(--r)",marginBottom:"4px"}}>Industry benchmark</div><div style={{fontSize:"12px",color:"var(--r)",opacity:".75"}}>Average SA payment gateway: 2,200ms</div><div style={{fontSize:"22px",fontWeight:"800",color:"var(--r)",marginTop:"8px"}}>BipraPay is 3× faster</div></div>
        </div>
      </div>
    </div></section>

    <section className="section" style={{background:"var(--off)"}}><div className="inner">
      <p className="slabel">Disbursement types</p>
      <h2 className="stitle">Every way you need to pay</h2>
      <div className="g3" style={{gap:"20px"}}>
        <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>Payroll</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65",marginBottom:"12px"}}>50,000 employees paid in under 90 seconds. Multiple banks, currencies, and pay schedules.</p><div style={{fontSize:"12px",fontWeight:"600",color:"var(--r)"}}>Max: 50,000 recipients/batch</div></div>
        <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>Supplier payments</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65",marginBottom:"12px"}}>Automate accounts payable. Trigger via API when PO approval is complete.</p><div style={{fontSize:"12px",fontWeight:"600",color:"var(--r)"}}>Supports: EFT, RTC, SWIFT</div></div>
        <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>Subscription payments</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65",marginBottom:"12px"}}>Recurring billing on any cycle — charge cards or debit accounts automatically, no manual re-authorisation.</p><div style={{fontSize:"12px",fontWeight:"600",color:"var(--r)"}}>Weekly, monthly, or annual</div></div>
        <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>Insurance claims</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65",marginBottom:"12px"}}>Trigger payouts the moment a claim is approved. Zero manual processing steps.</p><div style={{fontSize:"12px",fontWeight:"600",color:"var(--r)"}}>Trigger: API webhook or event</div></div>
        <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect x="9" y="3" width="6" height="4" rx="1"></rect><line x1="9" y1="12" x2="15" y2="12"></line><line x1="9" y1="16" x2="13" y2="16"></line></svg>Government grants</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65",marginBottom:"12px"}}>Mass disbursements with identity verification and POPIA-compliant data handling built in.</p><div style={{fontSize:"12px",fontWeight:"600",color:"var(--r)"}}>Compliant: POPIA, FICA, NPA</div></div>
        <div className="gcard shine grid-pop tilt" style={{borderRadius:"14px",padding:"24px"}}><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"6px",display:"flex",alignItems:"center",gap:"8px"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>E-commerce</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65",marginBottom:"12px"}}>Accept payments and split to sellers in a single API call. Instant settlement available.</p><div style={{fontSize:"12px",fontWeight:"600",color:"var(--r)"}}>Split payments supported</div></div>
      </div>
    </div></section>

    <section style={{background:"linear-gradient(135deg,#0a1230 0%,#0D0B1E 55%,#150a2e 100%)",padding:"110px 5%",position:"relative",overflow:"hidden"}}>
      <div className="inner">
        <div style={{textAlign:"center",marginBottom:"64px"}}>
          <span className="band-eyebrow cine-reveal" style={{color:"#FF6B6B"}}>Under the hood</span>
          <h2 className="cine-reveal s1" style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(28px,3.5vw,44px)",fontWeight:"800",letterSpacing:"-1px",color:"#fff",margin:"18px 0 14px"}}>One engine, every rail</h2>
          <p className="cine-reveal s2" style={{fontSize:"15px",color:"rgba(255,255,255,0.5)",maxWidth:"540px",margin:"0 auto",lineHeight:"1.75"}}>Funds enter through whichever channel your customer used, get orchestrated and reconciled in real time, and settle out through whichever rail is fastest right now.</p>
        </div>
        <div className="pay-diagram cine-reveal s3">
          <div className="pay-diagram-col">
            <div className="pay-node pay-node-in">
              <span className="pay-node-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="3"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg></span>
              Funding sources
            </div>
          </div>
          <div className="pay-diagram-arrow">→</div>
          <div className="pay-diagram-col">
            <div className="pay-engine">
              <div className="pay-node pay-node-core"><span className="pay-node-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></span>Payment orchestration</div>
              <div className="pay-node pay-node-core"><span className="pay-node-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><polyline points="9,12 11,14 15,10"></polyline></svg></span>Reconciliation &amp; audit</div>
            </div>
          </div>
          <div className="pay-diagram-arrow">→</div>
          <div className="pay-diagram-col pay-diagram-fan">
            <div className="pay-node pay-node-out">Bank EFT</div>
            <div className="pay-node pay-node-out">Real-time clearing (RTC)</div>
            <div className="pay-node pay-node-out">Mobile wallets</div>
          </div>
        </div>
      </div>
    </section>

    <section style={{background:"linear-gradient(135deg,#0D0B1E 0%,#150a2e 100%)",padding:"110px 5%",position:"relative",overflow:"hidden"}}>
      <div className="inner">
        <div style={{textAlign:"center",marginBottom:"56px"}}>
          <span className="band-eyebrow cine-reveal" style={{color:"#FF6B6B"}}>Multi-rail routing</span>
          <h2 className="cine-reveal s1" style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(28px,3.5vw,44px)",fontWeight:"800",letterSpacing:"-1px",color:"#fff",margin:"18px 0 14px"}}>One hub, every direction</h2>
          <p className="cine-reveal s2" style={{fontSize:"15px",color:"rgba(255,255,255,0.5)",maxWidth:"540px",margin:"0 auto",lineHeight:"1.75"}}>BipraPay sits at the centre of every rail your business needs — domestic and cross-border — so adding a new payment method never means a new integration.</p>
        </div>
        <div className="hub-diagram cine-reveal s3">
          <svg className="hub-lines" viewBox="0 0 600 400" preserveAspectRatio="none">
            <line x1="300" y1="200" x2="90" y2="90"></line>
            <line x1="300" y1="200" x2="90" y2="310"></line>
            <line x1="300" y1="200" x2="510" y2="90"></line>
            <line x1="300" y1="200" x2="510" y2="310"></line>
          </svg>
          <div className="hub-node hub-node-center"><span className="logotext" style={{fontSize:"24px"}}>bipra</span></div>
          <div className="hub-node hub-node-tl"><span className="hub-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="3"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg></span><span className="hub-node-label">Bank channels</span></div>
          <div className="hub-node hub-node-bl"><span className="hub-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></span><span className="hub-node-label">Orchestration engine</span></div>
          <div className="hub-node hub-node-tr"><span className="hub-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span><span className="hub-node-label">Cross-border (SWIFT)</span></div>
          <div className="hub-node hub-node-br"><span className="hub-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg></span><span className="hub-node-label">Real-time clearing (RTC)</span></div>
        </div>
        <div className="hub-diagram-mobile">
          <div className="hub-node"><span className="hub-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="3"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg></span><span className="hub-node-label">Bank channels</span></div>
          <div className="hub-node"><span className="hub-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></span><span className="hub-node-label">Orchestration engine</span></div>
          <div className="hub-node"><span className="hub-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span><span className="hub-node-label">Cross-border (SWIFT)</span></div>
          <div className="hub-node"><span className="hub-node-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg></span><span className="hub-node-label">Real-time clearing (RTC)</span></div>
        </div>
      </div>
    </section>

    <section className="section"><div className="inner-n"><div className="quote-block-wrap"><div className="quote-block">
      <p style={{fontSize:"20px",fontWeight:"600",color:"#fff",lineHeight:"1.5",marginBottom:"24px",position:"relative",zIndex:"1"}}>"BipraPay processes our entire payroll — 800 staff across 6 provinces — in under 90 seconds. Every Friday. Without fail. The old system took 4 hours and still had errors."</p>
      <div style={{display:"flex",alignItems:"center",gap:"14px",position:"relative",zIndex:"1"}}>
        <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"linear-gradient(135deg,#FF6B35,var(--r))",boxShadow:"0 6px 16px rgba(232,21,42,0.35)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700",color:"#fff",flexShrink:"0"}}>ZK</div>
        <div><div style={{fontSize:"14px",fontWeight:"600",color:"#fff"}}>Zola Khumalo</div><div style={{fontSize:"12px",color:"rgba(255,255,255,0.45)"}}>Head of Finance, Ubuntu Logistics</div></div>
      </div>
    </div></div></div></section>

    <section className="section" style={{background:"var(--off)"}}><div className="inner">
      <p className="slabel" style={{textAlign:"center"}}>Pricing</p>
      <h2 className="stitle" style={{textAlign:"center",maxWidth:"560px",margin:"0 auto 16px"}}>Simple, transaction-based pricing</h2>
      <p className="ssub" style={{textAlign:"center",margin:"0 auto 40px"}}>No bundled software fee — you pay for what moves through the rail, on every payment method.</p>
      <div style={{background:"#fff",borderRadius:"18px",border:"1px solid var(--border)",overflow:"hidden",marginBottom:"24px"}}>
        <div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:"14px"}}>
          <thead><tr style={{borderBottom:"2px solid var(--border)"}}>
            <th style={{textAlign:"left",padding:"16px 20px",color:"var(--muted)",fontWeight:"500"}}>Payment method</th>
            <th style={{textAlign:"center",padding:"16px 20px",color:"var(--ink)",fontWeight:"700"}}>Standard</th>
            <th style={{textAlign:"center",padding:"16px 20px",color:"var(--r)",fontWeight:"700"}}>Enterprise</th>
          </tr></thead>
          <tbody>
            <tr style={{borderBottom:"1px solid var(--border)"}}><td style={{padding:"14px 20px",color:"var(--ink2)"}}>Local Mastercard, Visa &amp; Amex</td><td style={{textAlign:"center",padding:"14px 20px"}}>2.75% + R1.50/txn</td><td style={{textAlign:"center",padding:"14px 20px",color:"var(--r)",fontWeight:"600"}}>Volume-based</td></tr>
            <tr style={{borderBottom:"1px solid var(--border)"}}><td style={{padding:"14px 20px",color:"var(--ink2)"}}>International cards</td><td style={{textAlign:"center",padding:"14px 20px"}}>3.25% + R1.50/txn</td><td style={{textAlign:"center",padding:"14px 20px",color:"var(--r)",fontWeight:"600"}}>Volume-based</td></tr>
            <tr style={{borderBottom:"1px solid var(--border)"}}><td style={{padding:"14px 20px",color:"var(--ink2)"}}>Bank EFT</td><td style={{textAlign:"center",padding:"14px 20px"}}>1.25% + R1.50/txn</td><td style={{textAlign:"center",padding:"14px 20px",color:"var(--r)",fontWeight:"600"}}>Volume-based</td></tr>
            <tr style={{borderBottom:"1px solid var(--border)"}}><td style={{padding:"14px 20px",color:"var(--ink2)"}}>Real-time clearing (RTC)</td><td style={{textAlign:"center",padding:"14px 20px"}}>1.50% + R1.50/txn</td><td style={{textAlign:"center",padding:"14px 20px",color:"var(--r)",fontWeight:"600"}}>Volume-based</td></tr>
            <tr style={{borderBottom:"1px solid var(--border)"}}><td style={{padding:"14px 20px",color:"var(--ink2)"}}>Mobile wallets</td><td style={{textAlign:"center",padding:"14px 20px"}}>2.25% + R1.50/txn</td><td style={{textAlign:"center",padding:"14px 20px",color:"var(--r)",fontWeight:"600"}}>Volume-based</td></tr>
            <tr style={{borderBottom:"1px solid var(--border)"}}><td style={{padding:"14px 20px",color:"var(--ink2)"}}>Cross-border (SWIFT)</td><td style={{textAlign:"center",padding:"14px 20px"}}>3.50% + R1.50/txn</td><td style={{textAlign:"center",padding:"14px 20px",color:"var(--r)",fontWeight:"600"}}>Volume-based</td></tr>
            <tr><td style={{padding:"14px 20px",color:"var(--ink2)"}}>Payroll batch disbursement</td><td style={{textAlign:"center",padding:"14px 20px"}}>R1.50/recipient</td><td style={{textAlign:"center",padding:"14px 20px",color:"var(--r)",fontWeight:"600"}}>Volume-based</td></tr>
          </tbody>
        </table></div>
      </div>
      <div style={{maxWidth:"860px",margin:"0 auto"}}>
        <details style={{background:"#fff",borderRadius:"12px",border:"1px solid var(--border)",padding:"18px 20px",marginBottom:"10px"}}>
          <summary style={{fontFamily:"var(--fd)",fontSize:"15px",fontWeight:"700",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Setup &amp; monthly fee<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary>
          <div style={{marginTop:"14px",display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0",borderBottom:"1px solid var(--border)"}}><span style={{color:"var(--ink2)"}}>Setup fee</span><span style={{fontWeight:"600"}}>No setup fee on either plan</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0",borderBottom:"1px solid var(--border)"}}><span style={{color:"var(--ink2)"}}>Account fee</span><span style={{fontWeight:"600"}}>N/A · Enterprise R300/month</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0"}}><span style={{color:"var(--ink2)"}}>Reconciliation fee</span><span style={{fontWeight:"600"}}>R150/month · Included on Enterprise</span></div>
          </div>
        </details>
        <details style={{background:"#fff",borderRadius:"12px",border:"1px solid var(--border)",padding:"18px 20px",marginBottom:"10px"}}>
          <summary style={{fontFamily:"var(--fd)",fontSize:"15px",fontWeight:"700",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Settlements<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary>
          <div style={{marginTop:"14px",display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0",borderBottom:"1px solid var(--border)"}}><span style={{color:"var(--ink2)"}}>Own bank account</span><span style={{color:"var(--g)",fontWeight:"700"}}>✓ Both plans</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0",borderBottom:"1px solid var(--border)"}}><span style={{color:"var(--ink2)"}}>Settlement frequency</span><span style={{fontWeight:"600"}}>Daily (after 2 weeks) · Daily on Enterprise</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0"}}><span style={{color:"var(--ink2)"}}>Bring your own merchant account</span><span style={{fontWeight:"600"}}>Enterprise only</span></div>
          </div>
        </details>
        <details style={{background:"#fff",borderRadius:"12px",border:"1px solid var(--border)",padding:"18px 20px",marginBottom:"10px"}}>
          <summary style={{fontFamily:"var(--fd)",fontSize:"15px",fontWeight:"700",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Platform features<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary>
          <div style={{marginTop:"14px",display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0",borderBottom:"1px solid var(--border)"}}><span style={{color:"var(--ink2)"}}>Payment links, one-click checkout &amp; recurring billing</span><span style={{color:"var(--g)",fontWeight:"700"}}>✓ Both plans</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0"}}><span style={{color:"var(--ink2)"}}>Webhook &amp; event streaming</span><span style={{fontWeight:"600"}}>Enterprise only</span></div>
          </div>
        </details>
        <details style={{background:"#fff",borderRadius:"12px",border:"1px solid var(--border)",padding:"18px 20px",marginBottom:"10px"}}>
          <summary style={{fontFamily:"var(--fd)",fontSize:"15px",fontWeight:"700",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Recon &amp; analytics<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary>
          <div style={{marginTop:"14px",display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0",borderBottom:"1px solid var(--border)"}}><span style={{color:"var(--ink2)"}}>Reconciliation data &amp; transaction export</span><span style={{color:"var(--g)",fontWeight:"700"}}>✓ Both plans</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0"}}><span style={{color:"var(--ink2)"}}>Support for customer recon systems</span><span style={{fontWeight:"600"}}>Enterprise only</span></div>
          </div>
        </details>
        <details style={{background:"#fff",borderRadius:"12px",border:"1px solid var(--border)",padding:"18px 20px"}}>
          <summary style={{fontFamily:"var(--fd)",fontSize:"15px",fontWeight:"700",cursor:"pointer",listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Customer support<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary>
          <div style={{marginTop:"14px",display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0",borderBottom:"1px solid var(--border)"}}><span style={{color:"var(--ink2)"}}>Support channel</span><span style={{fontWeight:"600"}}>Email &amp; call centre · Dedicated manager on Enterprise</span></div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"13.5px",padding:"9px 0"}}><span style={{color:"var(--ink2)"}}>Response SLA</span><span style={{fontWeight:"600"}}>48 hours · 1 hour on Enterprise</span></div>
          </div>
        </details>
      </div>
      <div style={{textAlign:"center",marginTop:"32px"}}><Link className="btn btn-r btn-lg" href="/contact">Talk to sales</Link></div>
    </div></section>

    <section style={{background:"var(--r)",padding:"80px 5%",textAlign:"center"}}><div className="inner-n"><h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(26px,3vw,38px)",fontWeight:"800",color:"#fff",letterSpacing:"-.8px",marginBottom:"16px"}}>Ready to move at the speed of now?</h2><p style={{fontSize:"16px",color:"rgba(255,255,255,0.6)",marginBottom:"36px"}}>Set up BipraPay in your environment today.</p><div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}><Link className="btn btn-w btn-lg" href="/contact">Book a demo</Link><Link className="btn btn-ow btn-lg" href="/pricing">See pricing</Link></div></div></section>
    </div>
  );
}
