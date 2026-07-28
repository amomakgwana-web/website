import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "How BIPRA uses cookies and similar technologies on this site.",
};

export default function Page() {
  return (
    <div id="page-cookies" className="page active pw">
    <section className="section" style={{paddingTop:"100px"}}><div className="inner-n">
      <p className="slabel">Legal</p>
      <h1 style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(32px,4vw,44px)",fontWeight:"800",letterSpacing:"-1px",marginBottom:"8px",lineHeight:"1.1"}}>Cookie Notice</h1>
      <p style={{fontSize:"13px",color:"var(--muted)",marginBottom:"40px"}}>Last updated: 1 January 2025</p>
      <div style={{display:"flex",flexDirection:"column",gap:"32px"}}>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>1. What cookies are</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>Cookies are small text files placed on your device when you visit our site. We use them, and similar technologies like local storage, to keep the site working correctly and to understand how it's used.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>2. Cookies we use</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8",marginBottom:"12px"}}>We use three categories of cookies:</p>
          <ul style={{display:"flex",flexDirection:"column",gap:"10px",paddingLeft:"18px"}}>
            <li style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}><strong>Strictly necessary</strong> — required for the site to function (e.g. remembering your cookie preference, session security). These can't be switched off.</li>
            <li style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}><strong>Analytics</strong> — help us understand how visitors use the site, so we can improve it. Only set if you accept cookies.</li>
            <li style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}><strong>Functional</strong> — remember choices you've made (such as display preferences) to improve your experience.</li>
          </ul>
        </div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>3. Your choices</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>You can accept or decline non-essential cookies using the banner shown on your first visit. You can also clear cookies at any time through your browser settings, or block them entirely — this may affect how parts of the site work.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>4. Third parties</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>Where we use third-party services (such as analytics providers), those providers may set their own cookies subject to their own privacy policies. We only enable these after you accept cookies.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>5. Contact</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>Questions about this notice or our use of cookies: privacy@biprasoftware.com. See also our <a href="/privacy" style={{color:"var(--p)",fontWeight:"600"}}>Privacy Policy</a>.</p></div>
      </div>
    </div></section></div>
  );
}
