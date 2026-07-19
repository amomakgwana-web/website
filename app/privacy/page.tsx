import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BIPRA collects, uses, and protects your information.",
};

export default function Page() {
  return (
    <div id="page-privacy" className="page active pw">
    <section className="section" style={{paddingTop:"100px"}}><div className="inner-n">
      <p className="slabel">Legal</p>
      <h1 style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(32px,4vw,44px)",fontWeight:"800",letterSpacing:"-1px",marginBottom:"8px",lineHeight:"1.1"}}>Privacy Policy</h1>
      <p style={{fontSize:"13px",color:"var(--muted)",marginBottom:"40px"}}>Last updated: 1 January 2025</p>
      <div style={{display:"flex",flexDirection:"column",gap:"32px"}}>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>1. Information we collect</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>BIPRA collects information you provide directly (such as account registration details, payment information, and communications with us), information generated through your use of our services (transaction data, usage logs, device information), and information from third parties where applicable and lawful.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>2. How we use your information</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>We use collected information to provide, maintain, and improve our services; process transactions; send service communications; comply with legal obligations including POPIA, GDPR, SARB requirements, and SARS reporting; and detect and prevent fraud.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>3. Data retention</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>We retain personal information for as long as necessary to provide our services and comply with legal obligations. Financial transaction records are retained for a minimum of 5 years in accordance with South African tax and financial regulations.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>4. Your rights (POPIA &amp; GDPR)</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>You have the right to access, correct, or delete your personal information; object to or restrict processing; data portability; and to lodge a complaint with the Information Regulator of South Africa. Contact us at privacy@biprasoftware.com to exercise these rights.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>5. Contact</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>BIPRA (Pty) Ltd, Sandton, Johannesburg, South Africa. Email: privacy@biprasoftware.com | Phone: +27 67 716 4066</p></div>
      </div>
    </div></section></div>
  );
}
