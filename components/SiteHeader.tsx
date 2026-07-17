"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const [drop, setDrop] = useState<"vas" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isProductRoute = ["/biprapay", "/veribills", "/morr-erp"].includes(pathname);

  // Close dropdowns and the mobile menu whenever the route changes. Adjusted
  // during render (rather than in an effect) so it lands in the same commit
  // as the navigation instead of causing an extra render pass.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setDrop(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setDrop(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrop(null);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggle = (which: "vas") => setDrop((d) => (d === which ? null : which));

  const line = (transform: string, opacity = "1"): React.CSSProperties => ({
    display: "block",
    width: "22px",
    height: "2px",
    background: "#fff",
    borderRadius: "2px",
    transition: "all .25s",
    transform,
    opacity,
  });

  return (
    <>
      {mobileOpen && (
        <div id="mobile-menu" style={{display:"block",position:"fixed",top:"var(--nav)",left:"0",right:"0",bottom:"0",zIndex:"190",background:"rgba(255,255,255,0.72)",backdropFilter:"blur(30px) saturate(1.6)",WebkitBackdropFilter:"blur(30px) saturate(1.6)",padding:"32px 6%",overflowY:"auto"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"4px",marginBottom:"32px"}}>
            <p style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px"}}>VAS</p>
            <Link style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"10px",cursor:"pointer",transition:"background .15s"}} href="/biprapay" className="hv-px"><div style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--rl)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><div style={{width:"10px",height:"10px",borderRadius:"50%",background:"#E8152A"}}></div></div><div><div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>BipraPay</div><div style={{fontSize:"12px",color:"var(--muted)"}}>Payments, audit &amp; instant gateway</div></div></Link>
            <Link style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"10px",cursor:"pointer",transition:"background .15s"}} href="/veribills" className="hv-px"><div style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--gl)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><div style={{width:"10px",height:"10px",borderRadius:"50%",background:"#0A7B3E"}}></div></div><div><div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>VeriBills</div><div style={{fontSize:"12px",color:"var(--muted)"}}>Billing &amp; audit engine</div></div></Link>
            <Link style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"10px",cursor:"pointer",transition:"background .15s"}} href="/morr-erp" className="hv-px"><div style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><div style={{width:"10px",height:"10px",borderRadius:"50%",background:"#5533FF"}}></div></div><div><div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>Morr ERP</div><div style={{fontSize:"12px",color:"var(--muted)"}}>Enterprise workflow automation</div></div></Link>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"4px",marginBottom:"32px"}}>
            <p style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px"}}>Explore</p>
            <Link style={{padding:"12px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"var(--ink)",cursor:"pointer"}} href="/solutions">Solutions</Link>
            <Link style={{padding:"12px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"var(--ink)",cursor:"pointer"}} href="/developers">Developers</Link>
            <Link style={{padding:"12px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"var(--ink)",cursor:"pointer"}} href="/resources">Resources</Link>
            <Link style={{padding:"12px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"var(--ink)",cursor:"pointer"}} href="/about">Bipra</Link>
            <Link style={{padding:"12px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"var(--ink)",cursor:"pointer"}} href="/pricing">Pricing</Link>
            <Link style={{padding:"12px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"var(--ink)",cursor:"pointer"}} href="/contact">Contact</Link>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{background:"var(--off)",borderRadius:"14px",padding:"12px",marginBottom:"4px"}}>
              <p style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:".8px",marginBottom:"10px",padding:"0 4px"}}>Sign in to a portal</p>
              <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
                <a href="#" style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",borderRadius:"9px",background:"#fff",cursor:"pointer"}} onClick={(e) => { e.preventDefault(); setMobileOpen(false); }}>
                  <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"#E8152A",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:"800",color:"#fff",flexShrink:"0"}}>BP</div>
                  <div style={{fontSize:"13px",fontWeight:"600",color:"var(--ink)"}}>BipraPay Portal</div>
                </a>
                <a href="#" style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",borderRadius:"9px",background:"#fff",cursor:"pointer"}} onClick={(e) => { e.preventDefault(); setMobileOpen(false); }}>
                  <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"#0A7B3E",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:"800",color:"#fff",flexShrink:"0"}}>VB</div>
                  <div style={{fontSize:"13px",fontWeight:"600",color:"var(--ink)"}}>VeriBills Portal</div>
                </a>
                <a href="#" style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",borderRadius:"9px",background:"#fff",cursor:"pointer"}} onClick={(e) => { e.preventDefault(); setMobileOpen(false); }}>
                  <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"#3D22CC",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:"800",color:"#fff",flexShrink:"0"}}>ME</div>
                  <div style={{fontSize:"13px",fontWeight:"600",color:"var(--ink)"}}>Morr ERP</div>
                </a>
              </div>
            </div>
            <Link className="btn btn-p btn-lg" style={{width:"100%",justifyContent:"center"}} href="/contact">Get started</Link>
          </div>
        </div>
      )}
      <nav id="nav" ref={navRef}>
        <div className="masthead">
          <Link className="logo" href="/"><div className="logomark"><span>B</span></div><span className="logotext">bipra</span></Link>
        </div>
        <div className="navbar-orange">
          <ul className="navlinks">
            <li><Link href="/solutions" className={pathname === "/solutions" ? "active" : undefined}>Solutions</Link></li>
            <li className={`drop-wrap${drop === "vas" ? " open" : ""}${isProductRoute ? " active" : ""}`} id="nav-products-wrap">
              <button aria-haspopup="true" aria-expanded={drop === "vas"} onClick={(e) => { e.stopPropagation(); toggle("vas"); }}>VAS ▼</button>
              <div className="dropdown">
                <Link className="drop-item" href="/biprapay"><div className="drop-icon"><div className="drop-dot" style={{background:"#E8152A"}}></div></div><div><div className="drop-name">BipraPay</div><div className="drop-desc">Payments, audit &amp; instant gateway</div></div></Link>
                <Link className="drop-item" href="/veribills"><div className="drop-icon"><div className="drop-dot" style={{background:"#0A7B3E"}}></div></div><div><div className="drop-name">VeriBills</div><div className="drop-desc">Bill presentment &amp; smart metering</div></div></Link>
                <Link className="drop-item" href="/morr-erp"><div className="drop-icon"><div className="drop-dot" style={{background:"#5533FF"}}></div></div><div><div className="drop-name">Morr ERP</div><div className="drop-desc">Enterprise workflow automation</div></div></Link>
              </div>
            </li>
            <li><Link href="/developers" className={pathname === "/developers" ? "active" : undefined}>Developers</Link></li>
            <li><Link href="/resources" className={pathname === "/resources" ? "active" : undefined}>Resources</Link></li>
            <li><Link href="/about" className={pathname === "/about" ? "active" : undefined}>Bipra</Link></li>
          </ul>
          <div className="navcta">
            <Link className="btn btn-w btn-md" href="/contact">Contact</Link>
          </div>
          <button id="mob-btn" style={{display:"none",background:"none",border:"none",cursor:"pointer",padding:"6px",flexDirection:"column",gap:"5px",alignItems:"center",justifyContent:"center"}} aria-label="Menu" onClick={() => setMobileOpen((o) => !o)}>
            <span id="mob-line1" style={line(mobileOpen ? "translateY(7px) rotate(45deg)" : "")}></span>
            <span id="mob-line2" style={line("", mobileOpen ? "0" : "1")}></span>
            <span id="mob-line3" style={line(mobileOpen ? "translateY(-7px) rotate(-45deg)" : "")}></span>
          </button>
        </div>
      </nav>
    </>
  );
}
