import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of BIPRA products and services.",
};

export default function Page() {
  return (
    <div id="page-terms" className="page active pw">
    <section className="section" style={{paddingTop:"100px"}}><div className="inner-n">
      <p className="slabel">Legal</p>
      <h1 style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"clamp(32px,4vw,44px)",fontWeight:"800",letterSpacing:"-1px",marginBottom:"8px",lineHeight:"1.1"}}>Terms of Service</h1>
      <p style={{fontSize:"13px",color:"var(--muted)",marginBottom:"40px"}}>Last updated: 1 January 2025</p>
      <div style={{display:"flex",flexDirection:"column",gap:"32px"}}>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>1. Acceptance of terms</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>By accessing or using BIPRA's services, you agree to be bound by these Terms of Service and our Privacy Policy. If you are using the services on behalf of an organisation, you represent that you have authority to bind that organisation to these terms.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>2. Service description</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>BIPRA provides software-as-a-service products including payments, financial audit &amp; instant gateway (BipraPay), billing and metering (VeriBills), and enterprise workflow automation (Morr ERP). Services are provided subject to applicable South African laws and regulations.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>3. Acceptable use</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>You agree not to use BIPRA services for unlawful purposes, to process fraudulent transactions, to violate SARB regulations, or to engage in money laundering or terrorist financing. BIPRA reserves the right to suspend accounts found in violation of these terms.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>4. Liability</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>BIPRA's liability is limited to the fees paid by you in the 12 months preceding the claim. BIPRA is not liable for indirect, consequential, or punitive damages. These limitations apply to the fullest extent permitted by South African law.</p></div>
        <div><h2 style={{fontSize:"20px",fontWeight:"700",color:"var(--ink)",marginBottom:"12px"}}>5. Governing law</h2><p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:"1.8"}}>These terms are governed by the laws of the Republic of South Africa. Disputes shall be resolved in the courts of Gauteng, South Africa. Contact: legal@biprasoftware.com</p></div>
      </div>
    </div></section></div>
  );
}
