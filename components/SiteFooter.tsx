import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <div style={{height:"3px",background:"linear-gradient(90deg,var(--p),#7B5FFF,var(--r),#FF6B35,var(--p))",backgroundSize:"200% 100%",animation:"gradShift 4s ease infinite"}}></div>
      <footer>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"64px 5% 0"}}>
          <div className="ft-grid">
            <div><Link className="logo" style={{marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"}} href="/"><img src="/bipra-icon.png" alt="" style={{height:"22px",width:"auto"}} /><span className="logotext">bipra</span></Link><p style={{fontSize:"13px",color:"rgba(255,255,255,0.35)",lineHeight:"1.75",maxWidth:"240px"}}>Payments, billing, and enterprise workflow automation for modern African businesses.</p></div>
            <div className="ft-col"><h4>Products</h4><ul><li><Link href="/biprapay">BipraPay</Link></li><li><Link href="/veribills">VeriBills</Link></li><li><Link href="/morr-erp">Morr ERP</Link></li></ul></div>
            <div className="ft-col"><h4>Company</h4><ul><li><Link href="/about">About</Link></li><li><Link href="/careers">Careers</Link></li><li><Link href="/solutions">Solutions</Link></li><li><Link href="/vas">VAS</Link></li><li><Link href="/integrations">Integrations</Link></li><li><Link href="/developers">Developers</Link></li><li><Link href="/resources">Resources</Link></li><li><Link href="/pricing">Pricing</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
            <div className="ft-col"><h4>Legal</h4><ul><li><Link href="/privacy">Privacy Policy</Link></li><li><Link href="/cookies">Cookie Notice</Link></li><li><Link href="/terms">Terms of Service</Link></li><li><Link href="/trust">Trust Center</Link></li><li><Link href="/security">Security</Link></li><li><Link href="/status">System Status</Link></li></ul></div>
          </div>
          <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"28px 0",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
            {["PCI-DSS Level 1","ISO 27001","SOC 2 Type II","POPIA Compliant","SARB Licensed"].map((c) => (
              <span key={c} style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"11.5px",fontWeight:"600",color:"rgba(255,255,255,0.55)",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"100px",padding:"6px 13px"}}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {c}
              </span>
            ))}
          </div>
          <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
            <span style={{fontSize:"12px",color:"rgba(255,255,255,0.25)"}}>© 2025 BIPRA. All rights reserved.</span>
            <span style={{fontSize:"12px",color:"rgba(255,255,255,0.25)"}}>Built for Africa. Trusted worldwide.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
