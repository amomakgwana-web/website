"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

function readCookieChoice() {
  try {
    return localStorage.getItem("bipra_cookie");
  } catch {
    return null;
  }
}

// The server can't know the visitor's stored choice, so it renders as
// undecided; useSyncExternalStore reconciles that with the real value on
// the client without needing an effect + setState pass.
function readCookieChoiceServer() {
  return null;
}

export default function CookieBanner() {
  const storedChoice = useSyncExternalStore(noopSubscribe, readCookieChoice, readCookieChoiceServer);
  const [dismissed, setDismissed] = useState(false);
  const visible = !dismissed && storedChoice === null;

  const dismiss = (accepted: boolean) => {
    setDismissed(true);
    try {
      localStorage.setItem("bipra_cookie", accepted ? "1" : "0");
    } catch {}
  };

  if (!visible) return null;

  return (
    <div id="cookie-banner" style={{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:"500",background:"rgba(13,11,30,0.78)",backdropFilter:"blur(22px) saturate(1.4)",WebkitBackdropFilter:"blur(22px) saturate(1.4)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"14px",padding:"18px 24px",display:"flex",alignItems:"center",gap:"20px",boxShadow:"0 8px 40px rgba(0,0,0,0.3)",maxWidth:"680px",width:"calc(100% - 48px)",flexWrap:"wrap"}}>
      <p style={{fontSize:"13px",color:"rgba(255,255,255,0.6)",flex:"1",minWidth:"200px",lineHeight:"1.5",margin:"0"}}>We use cookies to improve your experience and analyse site usage. <Link href="/privacy" style={{color:"rgba(255,255,255,0.85)",textDecoration:"underline",cursor:"pointer"}}>Privacy Policy</Link></p>
      <div style={{display:"flex",gap:"10px",flexShrink:"0"}}>
        <button onClick={() => dismiss(false)} style={{fontSize:"13px",fontWeight:"500",padding:"8px 16px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.2)",background:"transparent",color:"rgba(255,255,255,0.6)",cursor:"pointer"}}>Decline</button>
        <button onClick={() => dismiss(true)} style={{fontSize:"13px",fontWeight:"500",padding:"8px 16px",borderRadius:"8px",border:"none",background:"var(--p)",color:"#fff",cursor:"pointer"}}>Accept all</button>
      </div>
    </div>
  );
}
