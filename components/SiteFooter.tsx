import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <div style={{height:"3px",background:"linear-gradient(90deg,var(--p),#7B5FFF,var(--r),#FF6B35,var(--p))",backgroundSize:"200% 100%",animation:"gradShift 4s ease infinite"}}></div>
      <footer>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"64px 5% 0"}}>
          <div className="ft-grid">
            <div><Link className="logo" style={{marginBottom:"16px"}} href="/"><div className="logomark"><span>B</span></div><span className="logotext">bipra</span></Link><p style={{fontSize:"13px",color:"rgba(255,255,255,0.35)",lineHeight:"1.75",maxWidth:"240px"}}>Payments, billing, and enterprise workflow automation for modern African businesses.</p></div>
            <div className="ft-col"><h4>Products</h4><ul><li><Link href="/xpayments">xPayments</Link></li><li><Link href="/swiftpay">SwiftPay</Link></li><li><Link href="/xbilling">xBilling</Link></li><li><Link href="/nexcore">NexCore ERP</Link></li></ul></div>
            <div className="ft-col"><h4>Company</h4><ul><li><Link href="/about">About</Link></li><li><Link href="/solutions">Solutions</Link></li><li><Link href="/developers">Developers</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
            <div className="ft-col"><h4>Legal</h4><ul><li><Link href="/privacy">Privacy Policy</Link></li><li><Link href="/terms">Terms of Service</Link></li><li><Link href="/security">Security</Link></li><li><Link href="/status">System Status</Link></li></ul></div>
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
