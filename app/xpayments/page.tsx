import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "xPayments",
  description: "Payments and financial auditing engine — EFT, card, SWIFT, and mobile money rails with immutable, SARB-compliant audit trails.",
};

export default function Page() {
  return (
    <div id="page-xpayments" className="page active pw">
    <section className="section" style={{paddingTop:"100px",background:"linear-gradient(160deg,var(--px) 0%,#fff 55%)"}}>
    <div className="inner two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"64px",alignItems:"center"}}>
    <div>
      <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"}}><div style={{width:"48px",height:"48px",borderRadius:"13px",background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="3"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg></div><span style={{fontFamily:"var(--fd)",fontWeight:"700",fontSize:"15px",color:"var(--p)"}}>xPayments</span></div>
      <h1 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,4.5vw,54px)",fontWeight:"800",lineHeight:"1.07",letterSpacing:"-1.5px",marginBottom:"20px"}}>Payments &amp; financial<br /><span className="grad-text">auditing</span><br />in one engine</h1>
      <p style={{fontSize:"17px",color:"var(--muted)",lineHeight:"1.75",maxWidth:"460px",marginBottom:"36px",fontWeight:"300"}}>End-to-end payment processing with a built-in financial systems audit engine. Every rand in and out — processed, reconciled, and audit-trailed automatically.</p>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}><Link className="btn btn-p btn-lg" href="/contact">Get a demo</Link><Link className="btn btn-o btn-lg" href="/pricing">View pricing</Link></div>
    </div>
    <div style={{background:"var(--ink)",borderRadius:"20px",padding:"28px",boxShadow:"var(--sh)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}><span style={{fontFamily:"var(--fd)",fontSize:"14px",fontWeight:"600",color:"#fff"}}>Live payment &amp; audit feed</span><span style={{fontSize:"11px",padding:"3px 10px",borderRadius:"100px",background:"rgba(34,197,94,0.15)",color:"#4ADE80",display:"flex",alignItems:"center",gap:"4px"}}><span style={{width:"6px",height:"6px",background:"#22C55E",borderRadius:"50%",animation:"pulse 2s infinite",display:"inline-block"}}></span>Live</span></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"}}><div><div style={{fontSize:"12px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>TXN-7821</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>EFT Inbound · Audit: reconciled · just now</div></div><div style={{textAlign:"right"}}><div style={{fontSize:"13px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>R 42,500</div><span style={{fontSize:"10px",padding:"2px 8px",borderRadius:"100px",background:"rgba(34,197,94,0.15)",color:"#4ADE80"}}>success</span></div></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"}}><div><div style={{fontSize:"12px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>TXN-7820</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>Card Payment · Audit: cleared · 12s ago</div></div><div style={{textAlign:"right"}}><div style={{fontSize:"13px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>R 8,200</div><span style={{fontSize:"10px",padding:"2px 8px",borderRadius:"100px",background:"rgba(34,197,94,0.15)",color:"#4ADE80"}}>success</span></div></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"}}><div><div style={{fontSize:"12px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>TXN-7819</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>Bulk disbursement · 28s ago</div></div><div style={{textAlign:"right"}}><div style={{fontSize:"13px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>R 156,000</div><span style={{fontSize:"10px",padding:"2px 8px",borderRadius:"100px",background:"rgba(251,191,36,0.15)",color:"#FCD34D"}}>processing</span></div></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0"}}><div><div style={{fontSize:"12px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>TXN-7818</div><div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>Mobile money · 1m ago</div></div><div style={{textAlign:"right"}}><div style={{fontSize:"13px",fontWeight:"600",color:"#fff",marginBottom:"2px"}}>R 3,750</div><span style={{fontSize:"10px",padding:"2px 8px",borderRadius:"100px",background:"rgba(34,197,94,0.15)",color:"#4ADE80"}}>success</span></div></div>
    </div>
    </div></section>
    <section style={{padding:"60px 5%",background:"var(--p)"}}><div className="inner"><div className="stat-bar"><div className="stat-cell" style={{background:"var(--p)"}}><div style={{fontFamily:"var(--fd)",fontSize:"40px",fontWeight:"800",color:"#fff",lineHeight:"1",marginBottom:"6px"}}>R1B+</div><div style={{fontSize:"13px",color:"rgba(255,255,255,0.55)"}}>Payments processed/mo</div></div><div className="stat-cell" style={{background:"var(--p)"}}><div style={{fontFamily:"var(--fd)",fontSize:"40px",fontWeight:"800",color:"#fff",lineHeight:"1",marginBottom:"6px"}}>99.99%</div><div style={{fontSize:"13px",color:"rgba(255,255,255,0.55)"}}>Platform uptime SLA</div></div><div className="stat-cell" style={{background:"var(--p)"}}><div style={{fontFamily:"var(--fd)",fontSize:"40px",fontWeight:"800",color:"#fff",lineHeight:"1",marginBottom:"6px"}}>&lt;200ms</div><div style={{fontSize:"13px",color:"rgba(255,255,255,0.55)"}}>Avg processing time</div></div><div className="stat-cell" style={{background:"var(--p)"}}><div style={{fontFamily:"var(--fd)",fontSize:"40px",fontWeight:"800",color:"#fff",lineHeight:"1",marginBottom:"6px"}}>100%</div><div style={{fontSize:"13px",color:"rgba(255,255,255,0.55)"}}>Audit trail coverage</div></div></div></div></section>

    <section className="section"><div className="inner">
      <p className="slabel">How it works</p>
      <h2 className="stitle">Payment processed. Audit created. Automatically.</h2>
      <p className="ssub">Every transaction through xPayments generates a complete, immutable audit record — no separate audit setup required.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"center"}} className="two-col">
        <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          <div className="icon-feature"><div className="icon-feature-icon" style={{background:"var(--pl)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="3"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg></div><div><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Payment instruction received</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>xPayments receives the instruction via API, validates against compliance rules, and queues for processing.</p></div></div>
          <div className="icon-feature"><div className="icon-feature-icon" style={{background:"var(--pl)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><div><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Real-time compliance screening</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>AML and fraud scoring runs in under 50ms. Flagged transactions are quarantined for human review.</p></div></div>
          <div className="icon-feature"><div className="icon-feature-icon" style={{background:"var(--pl)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5533FF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div><div><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Payment sent to rail</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>Routed to the optimal payment rail — EFT, card network, RTC, or mobile money — based on your configuration.</p></div></div>
          <div className="icon-feature"><div className="icon-feature-icon" style={{background:"var(--gl)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A7B3E" strokeWidth="2"><path d="M9 12h6M9 16h6M9 8h6M5 3h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path></svg></div><div><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Audit record created automatically</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>An immutable audit event is written with full transaction metadata, timestamps, and compliance check results.</p></div></div>
          <div className="icon-feature"><div className="icon-feature-icon" style={{background:"var(--gl)"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A7B3E" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div><div style={{fontSize:"15px",fontWeight:"700",color:"var(--ink)",marginBottom:"4px"}}>Reconciliation &amp; reporting</div><p style={{fontSize:"13px",color:"var(--muted)",lineHeight:"1.65"}}>Funds confirmed. Reconciliation runs automatically. SARB/SARS reports generated on demand.</p></div></div>
        </div>
        <div style={{background:"var(--ink)",borderRadius:"20px",padding:"28px"}}>
          <div style={{fontSize:"11px",fontWeight:"600",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"20px"}}>Audit event — JSON</div>
          <div style={{fontFamily:"monospace",fontSize:"12px",lineHeight:"1.9",color:"rgba(255,255,255,0.75)"}}>
            &#123;<br />
              <span style={{color:"#7B5FFF"}}>"id"</span>: <span style={{color:"#4ADE80"}}>"aud_XmP3rQvNs8LkT1"</span>,<br />
              <span style={{color:"#7B5FFF"}}>"payment_id"</span>: <span style={{color:"#4ADE80"}}>"pay_KwJm9xBzqL7PdQ2"</span>,<br />
              <span style={{color:"#7B5FFF"}}>"type"</span>: <span style={{color:"#4ADE80"}}>"payment.completed"</span>,<br />
              <span style={{color:"#7B5FFF"}}>"amount"</span>: <span style={{color:"#FCD34D"}}>150000</span>,<br />
              <span style={{color:"#7B5FFF"}}>"currency"</span>: <span style={{color:"#4ADE80"}}>"ZAR"</span>,<br />
              <span style={{color:"#7B5FFF"}}>"rail"</span>: <span style={{color:"#4ADE80"}}>"eft"</span>,<br />
              <span style={{color:"#7B5FFF"}}>"compliance"</span>: &#123;<br />
                <span style={{color:"#7B5FFF"}}>"aml_score"</span>: <span style={{color:"#FCD34D"}}>0.02</span>,<br />
                <span style={{color:"#7B5FFF"}}>"status"</span>: <span style={{color:"#4ADE80"}}>"cleared"</span><br />
              &#125;,<br />
              <span style={{color:"#7B5FFF"}}>"timestamp"</span>: <span style={{color:"#4ADE80"}}>"2025-06-01T14:22:07Z"</span>,<br />
              <span style={{color:"#7B5FFF"}}>"immutable"</span>: <span style={{color:"#FCD34D"}}>true</span><br />
            &#125;
          </div>
          <div style={{marginTop:"20px",padding:"14px",background:"rgba(85,51,255,0.15)",borderRadius:"10px",borderLeft:"3px solid var(--p)"}}>
            <div style={{fontSize:"12px",fontWeight:"600",color:"var(--p)",marginBottom:"4px"}}>ℹ Always on</div>
            <div style={{fontSize:"12px",color:"rgba(255,255,255,0.5)",lineHeight:"1.6"}}>Audit records cannot be deleted, edited, or suppressed — even by BIPRA staff. Compliant with SARB Directive 1 of 2020.</div>
          </div>
        </div>
      </div>
    </div></section>


    <section className="section" style={{background:"var(--off)"}}><div className="inner">
      <p className="slabel">Full feature set</p>
      <h2 className="stitle">Everything in xPayments</h2>
      <div style={{overflowX:"auto",background:"#fff",borderRadius:"16px",border:"1px solid var(--border)"}}>
        <table className="feat-table">
          <thead><tr><th style={{width:"35%"}}>Feature</th><th>Description</th><th style={{width:"120px",textAlign:"center"}}>Availability</th></tr></thead>
          <tbody>
            <tr><td style={{fontWeight:"600",color:"var(--p)"}} colSpan={3}>Payment Processing</td></tr>
            <tr><td>EFT / Bank transfers</td><td>Debit and credit EFT across all South African banks. Same-day and RTC rails</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>Card payments</td><td>Visa, Mastercard, Amex acquiring. 3D Secure 2.0 supported</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>Mobile money</td><td>M-Pesa, Airtel Money, MTN MoMo and other African wallets</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>SWIFT / Cross-border</td><td>International wire transfers with FX conversion and compliance</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>Bulk disbursements</td><td>Up to 100,000 recipients per batch. CSV, API, or webhook-triggered</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td style={{fontWeight:"600",color:"var(--p)"}} colSpan={3}>Financial Audit Engine</td></tr>
            <tr><td>Immutable audit trail</td><td>Every event hashed and stored. Cannot be altered by any party</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>Real-time reconciliation</td><td>Automatic matching of payments to ledger entries as they clear</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>SARB regulatory reports</td><td>Directive 1 of 2020, FICA reporting, and custom report templates</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>AML screening</td><td>Real-time screening against sanctions lists and risk scoring</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>External auditor portal</td><td>Read-only access for external auditors with export controls</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
            <tr><td>Audit event streaming</td><td>WebSocket stream for real-time audit event consumption</td><td style={{textAlign:"center"}}><span style={{color:"var(--g)",fontSize:"16px"}}>✓</span></td></tr>
          </tbody>
        </table>
      </div>
    </div></section>


    <section className="section"><div className="inner-n">
      <div className="quote-block">
        <p style={{fontSize:"20px",fontWeight:"600",color:"#fff",lineHeight:"1.5",marginBottom:"24px",position:"relative",zIndex:"1"}}>"We used to spend 3 weeks preparing for our annual SARB audit. With xPayments, the auditor just logs into the portal and pulls the reports. Our last audit took 4 hours."</p>
        <div style={{display:"flex",alignItems:"center",gap:"14px",position:"relative",zIndex:"1"}}>
          <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"var(--p)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700",color:"#fff",flexShrink:"0"}}>NK</div>
          <div><div style={{fontSize:"14px",fontWeight:"600",color:"#fff"}}>Nandi Khumalo</div><div style={{fontSize:"12px",color:"rgba(255,255,255,0.45)"}}>Head of Compliance, Savanna Finance Group</div></div>
        </div>
      </div>
    </div></section>

    <section className="section"><div className="inner"><p className="slabel">Integration &amp; Audit API</p><h2 className="stitle">Payments + audit in one API call</h2><p className="ssub">Every payment event streams to the financial audit engine automatically. REST API with full audit event log, reconciliation endpoints, and regulatory report generation.</p>
    <div className="code-block"><div className="code-dots"><div className="code-dot" style={{background:"#FF5F57"}}></div><div className="code-dot" style={{background:"#FEBC2E"}}></div><div className="code-dot" style={{background:"#28C840"}}></div></div>
    <span style={{color:"#7B5FFF"}}>const</span> bipra = <span style={{color:"#7B5FFF"}}>require</span>(<span style={{color:"#4ADE80"}}>'@bipra/xpayments'</span>);<br /><br />
    <span style={{color:"#7B5FFF"}}>const</span> client = <span style={{color:"#7B5FFF"}}>new</span> bipra.Client(&#123;<br />
      apiKey: process.env.BIPRA_API_KEY,<br />
      environment: <span style={{color:"#4ADE80"}}>'production'</span>,<br />
    &#125;);<br /><br />
    <span style={{color:"rgba(255,255,255,0.35)"}}>// Process payment — audit trail created automatically</span><br />
    <span style={{color:"#7B5FFF"}}>const</span> payment = <span style={{color:"#7B5FFF"}}>await</span> client.payments.create(&#123;<br />
      amount: <span style={{color:"#FCD34D"}}>45000</span>,<br />
      currency: <span style={{color:"#4ADE80"}}>'ZAR'</span>,<br />
      reference: <span style={{color:"#4ADE80"}}>'INV-2025-0842'</span>,<br />
    &#125;);</div>
    </div></section>
    <section style={{background:"var(--ink)",padding:"80px 5%",textAlign:"center"}}><div className="inner-n"><h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(26px,3vw,38px)",fontWeight:"800",color:"#fff",letterSpacing:"-.8px",marginBottom:"16px"}}>Payments &amp; auditing in one platform</h2><p style={{fontSize:"16px",color:"rgba(255,255,255,0.4)",marginBottom:"36px"}}>See how xPayments handles both payment processing and your financial systems audit requirements.</p><div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}><Link className="btn btn-w btn-lg" href="/contact">Book a demo</Link><Link className="btn btn-ow btn-lg" href="/pricing">See pricing</Link></div></div></section>
    </div>
  );
}
