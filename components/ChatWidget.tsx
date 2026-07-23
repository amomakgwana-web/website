"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type KBEntry = { keys: string[]; reply: string; qr?: string[] };
type Msg = { text: string; role: "bot" | "user"; time: string };

const KB: KBEntry[] = [
  {
    keys: ["hello", "hi", "hey", "good morning", "good afternoon", "howzit"],
    reply:
      "Hello! Welcome to BIPRA support. I'm here to help with BipraPay, VeriBills, Morr ERP, pricing, or anything else. What can I help you with today?",
    qr: ["Pricing", "Book a demo", "API help", "Products overview"],
  },
  {
    keys: ["pricing", "price", "cost", "how much", "plans", "subscription", "tariff"],
    reply:
      "BIPRA has three plans:\n\n• <strong>Starter</strong> — R259/mo (BipraPay, 2 seats)\n• <strong>Business</strong> — R469/mo (+ VeriBills, 10 seats, priority support)\n• <strong>Enterprise</strong> — Custom (all 3 products, unlimited seats, dedicated SLA)\n\nAll plans include a 14-day free trial. Annual billing saves 20%.",
    qr: ["Start free trial", "Book a demo", "Compare plans"],
  },
  {
    keys: ["demo", "trial", "test", "see it", "show me", "proof of concept"],
    reply:
      "I'd love to arrange a demo! Our team can walk you through any of our three products in a 30-minute session tailored to your use case.\n\nShall I put you through to our sales team, or would you prefer to book online?",
    qr: ["Book a demo now", "WhatsApp sales", "Contact form"],
  },
  {
    keys: ["biprapay", "bipra pay", "payment", "payments", "reconciliation", "audit", "eft", "card", "swift", "rail", "instant", "fast", "speed", "payroll", "disbursement", "salary"],
    reply:
      "BipraPay is our unified payments and instant gateway — one ecosystem covering processing and auditing. It handles:\n\n• EFT, card, SWIFT, mobile money rails\n• Sub-second processing via edge nodes, averaging <800ms\n• Real-time reconciliation with immutable, SARB-compliant audit trails\n• AML screening and payroll for up to 50,000 staff in one API call\n\nEvery payment auto-generates an audit record — no separate audit setup needed.",
    qr: ["BipraPay pricing", "See use cases", "API docs", "Book a demo"],
  },
  {
    keys: ["veribills", "billing", "meter", "smart meter", "bill", "electricity", "water", "municipality", "nersa", "tariff"],
    reply:
      "VeriBills is our bill presentment and smart metering solution. It:\n\n• Ingests AMI/AMR smart meter data (DLMS/COSEM, IEC 62056)\n• Applies IBT, TOU, or flat tariff structures\n• Generates itemised bills in under 5 minutes\n• Delivers via email, SMS, WhatsApp, portal, or print\n\nUsed by municipalities, utilities, and property management companies.",
    qr: ["VeriBills pricing", "Tariff types", "Book a demo"],
  },
  {
    keys: ["morr", "morr erp", "erp", "hr", "budget", "budgeting", "leave", "employee", "document", "approval", "workflow"],
    reply:
      "Morr ERP unifies three modules on one data model:\n\n• <strong>Budgeting</strong> — multi-level approvals, real-time actuals, PFMA/MFMA compliance\n• <strong>HR</strong> — employee records, leave management, payroll integration\n• <strong>Documents</strong> — digital signatures, version control, retention policies\n\nBudget approval cycles typically drop from 14 days to 3 days.",
    qr: ["Morr pricing", "Book a demo", "Module details"],
  },
  {
    keys: ["api", "developer", "sdk", "integrate", "integration", "webhook", "postman", "openapi", "rest", "endpoint"],
    reply:
      "BIPRA has a fully documented REST API with SDKs for Node.js, Python, Java, .NET, and PHP.\n\nQuick links:\n• Sandbox environment (free, no card needed)\n• OpenAPI spec + Postman collection\n• Webhooks for all events\n• Sub-200ms P99 response times\n\nWhat language are you building in?",
    qr: ["Node.js SDK", "Python SDK", "Open sandbox", "API reference"],
  },
  {
    keys: ["security", "pci", "compliant", "compliance", "sarb", "sars", "popia", "gdpr", "audit", "certificate"],
    reply:
      "BIPRA is certified to the highest standards:\n\n• PCI-DSS Level 1 (highest card data certification)\n• ISO 27001 information security\n• SOC 2 Type II\n• SARB Directive 1 of 2020 compliant\n• POPIA and GDPR compliant\n\nWe undergo annual third-party penetration testing and publish our security posture to enterprise clients under NDA.",
    qr: ["Request security docs", "Book a demo"],
  },
  {
    keys: ["onboard", "setup", "go live", "deploy", "how long", "implementation", "start"],
    reply:
      "Most customers go live within 3–5 business days:\n\n• Day 1: Contract + API keys\n• Days 1–3: Integration (we assist)\n• Days 3–5: Configure + test in sandbox\n• Day 5+: Production switch\n\nOur fastest go-live was 48 hours. A dedicated success manager is assigned from day one.",
    qr: ["Start free trial", "Talk to sales", "Book a demo"],
  },
  {
    keys: ["support", "help", "contact", "phone", "email", "call", "escalate", "issue", "problem"],
    reply:
      "Our support options:\n\n• <strong>Email:</strong> enquiry@biprasoftware.com\n• <strong>Phone:</strong> +27 67 716 4066\n• <strong>WhatsApp:</strong> Available below\n• <strong>Slack:</strong> Developer community\n\nResponse SLAs: Starter 48h · Business 8h · Enterprise 1h",
    qr: ["WhatsApp us", "Send email", "Book a call"],
  },
  {
    keys: ["joburg water", "west rand", "midvaal", "municipality", "local government", "public sector", "government"],
    reply:
      "BIPRA works with several municipalities and water boards, including Joburg Water, West Rand, and Midvaal.\n\nFor public sector clients we support:\n• PFMA/MFMA budget compliance\n• Auditor-General export formats\n• NERSA billing regulations\n• Mass citizen payment disbursements\n\nWould you like to speak with our public sector team?",
    qr: ["Book a public sector demo", "WhatsApp sales"],
  },
  {
    keys: ["hotel", "hospitality", "steyn city", "palazzo", "four seasons", "saxon", "luxury"],
    reply:
      "BIPRA powers payment and billing operations for several luxury hospitality groups.\n\nFor hotels and resorts we typically enable:\n• BipraPay for rapid supplier disbursements and secure card/EFT processing\n• Morr ERP for budget management across multiple properties\n\nShall I connect you with a specialist?",
    qr: ["Book a hospitality demo", "WhatsApp sales"],
  },
  {
    keys: ["insurance", "discovery", "outsurance", "momentum", "santam", "claims", "payout"],
    reply:
      "Several South African insurers use BipraPay for near-instant claims payouts — triggered the moment a claim is approved via API.\n\nWe also support:\n• Commission disbursements to brokers\n• Premium collection via direct debit\n• Financial audit trails for regulatory reporting\n\nWant to learn more?",
    qr: ["Insurance use cases", "Book a demo", "WhatsApp sales"],
  },
  {
    keys: ["whatsapp", "wa", "chat", "message", "text"],
    reply:
      "You can reach us on WhatsApp any time during business hours (Mon–Fri 08:00–18:00 SAST):\n\n• General support: +27 67 716 4066\n• Sales & demos: +27 67 716 4066\n• Developer support: +27 67 716 4066\n\nClick the WhatsApp button to connect directly.",
    qr: ["Open WhatsApp", "Book a demo", "Contact form"],
  },
  {
    keys: ["thank", "thanks", "appreciate", "great", "perfect", "awesome"],
    reply:
      "You're welcome! Is there anything else I can help you with? I'm happy to answer more questions, help you book a demo, or connect you with the right team.",
    qr: ["Book a demo", "Pricing", "Products overview"],
  },
];

const PRODUCTS_OVERVIEW: KBEntry = {
  keys: [],
  reply:
    "BIPRA has three products:\n\n• <strong>BipraPay</strong> — Payments, financial audit &amp; instant gateway, one ecosystem\n• <strong>VeriBills</strong> — Bill presentment + smart metering\n• <strong>Morr ERP</strong> — Budgeting, HR & digital documents\n\nThey work independently or as one unified platform. Which would you like to know more about?",
  qr: ["BipraPay", "VeriBills", "Morr ERP"],
};

const FALLBACK =
  "I'm not sure I have the answer to that, but our team definitely does! You can reach us at enquiry@biprasoftware.com or via WhatsApp.";

function findReply(keys: string[]): KBEntry | null {
  for (const entry of KB) {
    for (const key of keys) if (entry.keys.includes(key)) return entry;
  }
  return null;
}

function matchKB(text: string): KBEntry | null {
  const t = text.toLowerCase();
  let best: KBEntry | null = null;
  let bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const key of entry.keys) if (t.includes(key)) score += key.length;
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best;
}

function getTime() {
  const d = new Date();
  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
}

// Kept at module scope (not inlined in the component) so the randomness
// isn't attributed to render.
function randomTypingDelay() {
  return 900 + Math.random() * 600;
}

function openMailto() {
  window.location.href = "mailto:enquiry@biprasoftware.com";
}

const WA_ICON = (
  <>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.532 5.864L.061 23.5l5.81-1.524A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.792-.524-5.375-1.438l-.385-.228-3.988 1.046 1.065-3.889-.249-.402A9.968 9.968 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"></path>
  </>
);

export default function ChatWidget() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [waOpen, setWaOpen] = useState(false);
  const [badge, setBadge] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!openRef.current) setBadge(true);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const appendMsg = (text: string, role: "bot" | "user") =>
    setMessages((m) => [...m, { text, role, time: getTime() }]);

  const botReply = (entry: KBEntry | null) => {
    if (!entry) {
      appendMsg(FALLBACK, "bot");
      setQuickReplies(["WhatsApp us", "Contact form", "Book a demo"]);
      return;
    }
    appendMsg(entry.reply, "bot");
    setQuickReplies(entry.qr ?? []);
  };

  const botRespond = (entry: KBEntry | null) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      botReply(entry);
    }, randomTypingDelay());
  };

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;
    appendMsg(text, "user");
    setInput("");
    setQuickReplies([]);
    botRespond(matchKB(text));
  };

  const toggleChat = () => {
    // Plain value, not a functional updater — the side effects below must
    // run exactly once per click, and updater functions can be invoked
    // twice by React (e.g. in Strict Mode) to verify they're pure.
    const next = !open;
    setOpen(next);
    if (next) {
      setBadge(false);
      if (messages.length === 0) {
        setTimeout(() => {
          appendMsg("Hi! I'm BIPRA's automated FAQ assistant &mdash; I match your question against a set of common topics, I'm not a live agent or an AI model. I can answer questions about:", "bot");
          setQuickReplies(["Pricing", "Products overview", "Book a demo", "API help", "Support"]);
        }, 300);
      }
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  };

  const goTo = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const QR_ACTIONS: Record<string, () => void> = {
    Pricing: () => botReply(findReply(["pricing"])),
    "Book a demo": () => goTo("/contact"),
    "Book a demo now": () => goTo("/contact"),
    "API help": () => botReply(findReply(["api"])),
    "Products overview": () => botReply(PRODUCTS_OVERVIEW),
    BipraPay: () => botReply(findReply(["biprapay"])),
    VeriBills: () => botReply(findReply(["veribills"])),
    "Morr ERP": () => botReply(findReply(["morr"])),
    "Start free trial": () => goTo("/contact"),
    "Compare plans": () => goTo("/pricing"),
    "BipraPay pricing": () => goTo("/pricing"),
    "VeriBills pricing": () => goTo("/pricing"),
    "Morr pricing": () => goTo("/pricing"),
    "API reference": () => goTo("/developers"),
    "API docs": () => goTo("/developers"),
    "Open sandbox": () => goTo("/developers"),
    "Node.js SDK": () => goTo("/developers"),
    "Python SDK": () => goTo("/developers"),
    "See use cases": () => goTo("/biprapay"),
    "Tariff types": () => goTo("/veribills"),
    "Module details": () => goTo("/morr-erp"),
    "WhatsApp us": () => setWaOpen(true),
    "WhatsApp sales": () => setWaOpen(true),
    "Open WhatsApp": () => setWaOpen(true),
    "Send email": openMailto,
    "Book a call": () => goTo("/contact"),
    "Contact form": () => goTo("/contact"),
    "Request security docs": () => goTo("/security"),
    "Book a public sector demo": () => goTo("/contact"),
    "Book a hospitality demo": () => goTo("/contact"),
    "Insurance use cases": () => goTo("/biprapay"),
  };

  const onQuickReply = (label: string) => {
    const action = QR_ACTIONS[label];
    if (action) {
      action();
      return;
    }
    appendMsg(label, "user");
    setQuickReplies([]);
    botRespond(matchKB(label));
  };

  return (
    <>
      <div id="chat-widget" className={open ? "open" : ""}>
        <div className="chat-header">
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <div className="chat-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div>
              <div style={{fontSize:"14px",fontWeight:"700",color:"#fff"}}>BIPRA FAQ Assistant</div>
              <div className="chat-status"><span className="chat-status-dot"></span>Automated · answers common questions</div>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <button onClick={() => setWaOpen(true)} style={{display:"flex",alignItems:"center",gap:"5px",padding:"5px 12px",borderRadius:"100px",background:"#25D366",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:"600",color:"#fff",transition:"all .2s"}} title="Chat on WhatsApp">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff">{WA_ICON}</svg>
              WhatsApp
            </button>
            <button className="chat-close-btn" onClick={toggleChat}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div className={`chat-msg ${m.role}`} key={i}>
              <div
                className={`chat-bubble ${m.role}`}
                {...(m.role === "bot"
                  ? { dangerouslySetInnerHTML: { __html: m.text.replace(/\n/g, "<br>") } }
                  : { children: m.text })}
              />
              <div className="chat-time">{m.time} · {m.role === "bot" ? "BIPRA" : "You"}</div>
            </div>
          ))}
          {typing && (
            <div className="chat-msg bot">
              <div className="chat-typing"><div className="typing-dot"></div><div className="typing-dot"></div><div className="typing-dot"></div></div>
            </div>
          )}
        </div>

        <div className="chat-quick-replies">
          {quickReplies.map((label) => (
            <button className="qr-btn" key={label} onClick={() => onQuickReply(label)}>{label}</button>
          ))}
        </div>

        <div className="chat-input-area">
          <textarea
            id="chat-input"
            className="chat-input"
            ref={inputRef}
            placeholder="Ask a question..."
            rows={1}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
          ></textarea>
          <button className="chat-send-btn" onClick={() => send()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>

        <div className="chat-channel-bar">
          <span style={{fontSize:"11px",color:"var(--muted)"}}>Prefer WhatsApp?</span>
          <button className="wa-btn" onClick={() => setWaOpen(true)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">{WA_ICON}</svg>
            Chat on WhatsApp
          </button>
        </div>
      </div>

      <div id="wa-modal" className={waOpen ? "open" : ""} onClick={(e) => { if (e.target === e.currentTarget) setWaOpen(false); }}>
        <div className="wa-modal-card">
          <div style={{width:"64px",height:"64px",borderRadius:"50%",background:"#25D366",margin:"0 auto 20px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">{WA_ICON}</svg>
          </div>
          <h3 style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontSize:"20px",fontWeight:"800",color:"var(--ink)",marginBottom:"8px"}}>Chat on WhatsApp</h3>
          <p style={{fontSize:"14px",color:"var(--muted)",lineHeight:"1.7",marginBottom:"24px"}}>Connect with our support team directly on WhatsApp. Available Mon–Fri 08:00–18:00 SAST.</p>
          <div style={{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"20px"}}>
            <a href="https://wa.me/27677164066?text=Hi%20BIPRA%2C%20I%20need%20help%20with%20your%20products" target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",gap:"12px",padding:"14px 18px",background:"#f0fdf4",borderRadius:"12px",border:"1.5px solid #bbf7d0",textDecoration:"none"}}>
              <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">{WA_ICON}</svg>
              </div>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>General support</div>
                <div style={{fontSize:"12px",color:"var(--muted)"}}>+27 67 716 4066</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--g)" strokeWidth="2" style={{marginLeft:"auto"}}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </a>
            <a href="https://wa.me/27677164066?text=Hi%20BIPRA%20Sales%2C%20I%27d%20like%20a%20demo" target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",gap:"12px",padding:"14px 18px",background:"var(--pl)",borderRadius:"12px",border:"1.5px solid rgba(85,51,255,0.2)",textDecoration:"none"}}>
              <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"var(--p)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>Sales &amp; demos</div>
                <div style={{fontSize:"12px",color:"var(--muted)"}}>+27 67 716 4066</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--p)" strokeWidth="2" style={{marginLeft:"auto"}}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </a>
            <a href="https://wa.me/27677164066?text=Hi%20BIPRA%20Developer%20Support%2C%20I%20need%20help%20with%20the%20API" target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",gap:"12px",padding:"14px 18px",background:"#fff7ed",borderRadius:"12px",border:"1.5px solid #fed7aa",textDecoration:"none"}}>
              <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"#FF6B35",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize:"14px",fontWeight:"600",color:"var(--ink)"}}>Developer support</div>
                <div style={{fontSize:"12px",color:"var(--muted)"}}>+27 67 716 4066</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" style={{marginLeft:"auto"}}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
          <button onClick={() => setWaOpen(false)} style={{width:"100%",padding:"12px",borderRadius:"10px",border:"1.5px solid var(--border2)",background:"#fff",fontSize:"14px",fontWeight:"500",cursor:"pointer",color:"var(--muted)",transition:"all .2s"}}>Close</button>
        </div>
      </div>

      <div style={{position:"fixed",bottom:"28px",right:"28px",zIndex:"550",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"10px"}} id="chat-launcher">
        <button onClick={toggleChat} id="chat-fab" className="hv-scale" style={{position:"relative",width:"56px",height:"56px",background:"linear-gradient(135deg,var(--p),#7B5FFF)",border:"none",borderRadius:"50%",cursor:"pointer",boxShadow:"0 4px 24px rgba(85,51,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",transition:"transform .2s"}} aria-label={open ? "Close chat" : "Open chat"}>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          )}
          {badge && !open && <div id="chat-badge" style={{display:"flex"}}>1</div>}
        </button>
      </div>
    </>
  );
}
