"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type IndustryKey = "financial" | "government" | "retail";

const INDUSTRIES: Record<IndustryKey, { name: string; accent: string; gradient: string; icon: React.ReactNode; features: { title: string; desc: string }[] }> = {
  financial: {
    name: "Financial Services",
    accent: "#5533FF",
    gradient: "linear-gradient(135deg,#5533FF,#7B5FFF)",
    icon: <path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-6 10 6"></path>,
    features: [
      { title: "SARB-compliant rails", desc: "Payment rails built for South African regulation" },
      { title: "Real-time AML screening", desc: "Transaction monitoring as payments happen" },
      { title: "IFRS 9 provisioning", desc: "Automated financial reporting" },
      { title: "Multi-currency nostro", desc: "Manage accounts across currencies" },
    ],
  },
  government: {
    name: "Government & Public Sector",
    accent: "#0A7B3E",
    gradient: "linear-gradient(135deg,#0A7B3E,#00C87A)",
    icon: <path d="M12 2 3 7l9 5 9-5-9-5zM3 7v10l9 5 9-5V7"></path>,
    features: [
      { title: "PFMA / MFMA compliance", desc: "Budget rules built in" },
      { title: "Auditor-General exports", desc: "Reporting formats ready to submit" },
      { title: "Grant disbursement", desc: "Pay beneficiaries with ID verification" },
      { title: "Digital document mgmt", desc: "Paperless departmental workflows" },
    ],
  },
  retail: {
    name: "Retail & E-commerce",
    accent: "#E8152A",
    gradient: "linear-gradient(135deg,#E8152A,#FF6B35)",
    icon: <path d="M6 8h12l1 12H5zM9 8V6a3 3 0 0 1 6 0v2"></path>,
    features: [
      { title: "Instant checkout", desc: "Sub-second settlement via BipraPay" },
      { title: "Automated supplier pay", desc: "Accounts payable end to end" },
      { title: "Subscription payments", desc: "Recurring billing on any cycle" },
      { title: "Real-time reconciliation", desc: "Revenue matched automatically" },
    ],
  },
};

export default function SiteHeader() {
  const [drop, setDrop] = useState<"products" | "solutions" | null>(null);
  const [industryTab, setIndustryTab] = useState<IndustryKey>("financial");
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

  const toggle = (which: "products" | "solutions") => setDrop((d) => (d === which ? null : which));

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
            <p style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px"}}>Products</p>
            <Link style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"10px",cursor:"pointer",transition:"background .15s"}} href="/biprapay" className="hv-px"><div style={{width:"32px",height:"32px",borderRadius:"8px",overflow:"hidden",flexShrink:"0"}}><img src="/biprapay-logo.png" alt="" style={{width:"32px",height:"32px",objectFit:"cover"}} /></div><div><div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>BipraPay</div><div style={{fontSize:"12px",color:"var(--muted)"}}>Payments, audit &amp; instant gateway</div></div></Link>
            <Link style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"10px",cursor:"pointer",transition:"background .15s"}} href="/veribills" className="hv-px"><div style={{width:"32px",height:"32px",borderRadius:"8px",overflow:"hidden",flexShrink:"0"}}><img src="/veribills-logo.png" alt="" style={{width:"32px",height:"32px",objectFit:"cover"}} /></div><div><div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>VeriBills</div><div style={{fontSize:"12px",color:"var(--muted)"}}>Billing &amp; audit engine</div></div></Link>
            <Link style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"10px",cursor:"pointer",transition:"background .15s"}} href="/morr-erp" className="hv-px"><div style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--mol)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><img src="/morr-icon.png" alt="" style={{width:"20px",height:"20px",objectFit:"contain"}} /></div><div><div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>Morr ERP</div><div style={{fontSize:"12px",color:"var(--muted)"}}>Enterprise workflow automation</div></div></Link>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"4px",marginBottom:"32px"}}>
            <p style={{fontSize:"11px",fontWeight:"600",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px"}}>Explore</p>
            <Link style={{padding:"12px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"var(--ink)",cursor:"pointer"}} href="/solutions">Solutions</Link>
            <Link style={{padding:"12px",borderRadius:"10px",fontSize:"15px",fontWeight:"500",color:"var(--ink)",cursor:"pointer"}} href="/vas">VAS</Link>
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
                  <div style={{width:"32px",height:"32px",borderRadius:"8px",overflow:"hidden",flexShrink:"0"}}><img src="/biprapay-logo.png" alt="" style={{width:"32px",height:"32px",objectFit:"cover"}} /></div>
                  <div style={{fontSize:"13px",fontWeight:"600",color:"var(--ink)"}}>BipraPay Portal</div>
                </a>
                <a href="#" style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",borderRadius:"9px",background:"#fff",cursor:"pointer"}} onClick={(e) => { e.preventDefault(); setMobileOpen(false); }}>
                  <div style={{width:"32px",height:"32px",borderRadius:"8px",overflow:"hidden",flexShrink:"0"}}><img src="/veribills-logo.png" alt="" style={{width:"32px",height:"32px",objectFit:"cover"}} /></div>
                  <div style={{fontSize:"13px",fontWeight:"600",color:"var(--ink)"}}>VeriBills Portal</div>
                </a>
                <a href="#" style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 12px",borderRadius:"9px",background:"#fff",cursor:"pointer"}} onClick={(e) => { e.preventDefault(); setMobileOpen(false); }}>
                  <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--mol)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}><img src="/morr-icon.png" alt="" style={{width:"20px",height:"20px",objectFit:"contain"}} /></div>
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
          <Link className="logo" href="/"><span className="logotext">bipra</span></Link>
        </div>
        <div className="navbar-orange">
          <ul className="navlinks">
            <li className={`drop-wrap${drop === "solutions" ? " open" : ""}${pathname === "/solutions" ? " active" : ""}`} id="nav-solutions-wrap">
              <button aria-haspopup="true" aria-expanded={drop === "solutions"} onClick={(e) => { e.stopPropagation(); toggle("solutions"); }}>Solutions ▼</button>
              <div className="dropdown-mega">
                <div className="mega-grid">
                  <div className="mega-tabs">
                    {(Object.keys(INDUSTRIES) as IndustryKey[]).map((key) => {
                      const ind = INDUSTRIES[key];
                      return (
                        <button key={key} className={`mega-tab${industryTab === key ? " active" : ""}`} onMouseEnter={() => setIndustryTab(key)} onClick={() => setIndustryTab(key)}>
                          <span className="mega-tab-icon" style={{background: ind.gradient}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ind.icon}</svg></span>
                          {ind.name}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mega-panel">
                    {INDUSTRIES[industryTab].features.map((f, i) => (
                      <div key={i} className="mega-item">
                        <span className="mega-item-icon" style={{background: `${INDUSTRIES[industryTab].accent}14`, color: INDUSTRIES[industryTab].accent}}><svg width="14" height="14" viewBox="0 0 10 10" fill="none"><polyline points="2,5 4,7 8,3" stroke="currentColor" strokeWidth="1.8"></polyline></svg></span>
                        <div><div className="mega-item-title">{f.title}</div><div className="mega-item-desc">{f.desc}</div></div>
                      </div>
                    ))}
                    <div className="mega-footer"><Link href="/solutions" style={{fontSize:"12.5px",fontWeight:"600",color:"var(--p)"}}>View all solutions →</Link></div>
                  </div>
                </div>
              </div>
            </li>
            <li className={`drop-wrap${drop === "products" ? " open" : ""}${isProductRoute ? " active" : ""}`} id="nav-products-wrap">
              <button aria-haspopup="true" aria-expanded={drop === "products"} onClick={(e) => { e.stopPropagation(); toggle("products"); }}>Products ▼</button>
              <div className="dropdown">
                <Link className="drop-item" href="/biprapay"><div className="drop-icon" style={{background:"none",padding:"0",overflow:"hidden"}}><img src="/biprapay-logo.png" alt="" style={{width:"32px",height:"32px",borderRadius:"8px",objectFit:"cover"}} /></div><div><div className="drop-name">BipraPay</div><div className="drop-desc">Payments, audit &amp; instant gateway</div></div></Link>
                <Link className="drop-item" href="/veribills"><div className="drop-icon" style={{background:"none",padding:"0",overflow:"hidden"}}><img src="/veribills-logo.png" alt="" style={{width:"32px",height:"32px",borderRadius:"8px",objectFit:"cover"}} /></div><div><div className="drop-name">VeriBills</div><div className="drop-desc">Bill presentment &amp; smart metering</div></div></Link>
                <Link className="drop-item" href="/morr-erp"><div className="drop-icon" style={{background:"var(--mol)"}}><img src="/morr-icon.png" alt="" style={{width:"20px",height:"20px",objectFit:"contain"}} /></div><div><div className="drop-name">Morr ERP</div><div className="drop-desc">Enterprise workflow automation</div></div></Link>
              </div>
            </li>
            <li><Link href="/vas" className={pathname === "/vas" ? "active" : undefined}>VAS</Link></li>
            <li><Link href="/developers" className={pathname === "/developers" ? "active" : undefined}>Developers</Link></li>
            <li><Link href="/resources" className={pathname === "/resources" ? "active" : undefined}>Resources</Link></li>
            <li><Link href="/about" className={pathname === "/about" ? "active" : undefined}>Bipra</Link></li>
          </ul>
          <div className="navcta">
            <Link className="btn btn-w btn-md" href="/contact">Contact</Link>
          </div>
          <button id="mob-btn" style={{display:"none",background:"none",border:"none",cursor:"pointer",padding:"14px 12px",flexDirection:"column",gap:"5px",alignItems:"center",justifyContent:"center"}} aria-label="Menu" onClick={() => setMobileOpen((o) => !o)}>
            <span id="mob-line1" style={line(mobileOpen ? "translateY(7px) rotate(45deg)" : "")}></span>
            <span id="mob-line2" style={line("", mobileOpen ? "0" : "1")}></span>
            <span id="mob-line3" style={line(mobileOpen ? "translateY(-7px) rotate(-45deg)" : "")}></span>
          </button>
        </div>
      </nav>
    </>
  );
}
