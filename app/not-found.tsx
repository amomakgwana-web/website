import Link from "next/link";

export default function NotFound() {
  return (
    <div id="page-404" className="page active pw">
    <section style={{padding:"160px 5%",textAlign:"center"}}><div className="inner-n">
      <div style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"120px",fontWeight:"800",color:"var(--pl)",lineHeight:"1",letterSpacing:"-4px",marginBottom:"8px"}}>404</div>
      <h1 style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"32px",fontWeight:"800",color:"var(--ink)",letterSpacing:"-.5px",marginBottom:"16px"}}>Page not found</h1>
      <p style={{fontSize:"16px",color:"var(--muted)",lineHeight:"1.75",marginBottom:"36px"}}>The page you're looking for doesn't exist or has been moved.</p>
      <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
        <Link className="btn btn-p btn-lg" href="/">Back to home</Link>
        <Link className="btn btn-o btn-lg" href="/contact">Contact us</Link>
      </div>
    </div></section></div>
  );
}
