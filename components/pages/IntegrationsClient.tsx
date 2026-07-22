"use client";

import Link from "next/link";
import { useState } from "react";

type Category = "All" | "Accounting" | "CRM" | "Enterprise" | "Communication" | "Automation" | "Analytics" | "Cloud Storage";
type Country = "South Africa" | "Kenya" | "Mauritius";

const CATEGORIES: Category[] = ["All", "Accounting", "CRM", "Enterprise", "Communication", "Automation", "Analytics", "Cloud Storage"];
const COUNTRIES: { code: Country; abbr: string }[] = [
  { code: "South Africa", abbr: "ZA" },
  { code: "Kenya", abbr: "KE" },
  { code: "Mauritius", abbr: "MU" },
];

const INTEGRATIONS: { name: string; category: Exclude<Category, "All">; countries: Country[]; letter: string; gradient: string; desc: string }[] = [
  { name: "Xero", category: "Accounting", countries: ["South Africa", "Kenya", "Mauritius"], letter: "X", gradient: "linear-gradient(135deg,#5533FF,#7B5FFF)", desc: "Sync invoices, bills and reconciliation data automatically." },
  { name: "Sage", category: "Enterprise", countries: ["South Africa", "Kenya", "Mauritius"], letter: "S", gradient: "linear-gradient(135deg,#0A7B3E,#00C87A)", desc: "Two-way sync with Sage's accounting and ERP suite." },
  { name: "QuickBooks", category: "Accounting", countries: ["South Africa", "Mauritius"], letter: "QB", gradient: "linear-gradient(135deg,#0A7B3E,#22D488)", desc: "Push transactions and reconciliation entries in real time." },
  { name: "Salesforce", category: "CRM", countries: ["South Africa", "Kenya", "Mauritius"], letter: "SF", gradient: "linear-gradient(135deg,#00C1D4,#5533FF)", desc: "Trigger payments and billing events straight from CRM records." },
  { name: "HubSpot", category: "CRM", countries: ["South Africa", "Kenya", "Mauritius"], letter: "H", gradient: "linear-gradient(135deg,#FF6B35,#FFA36B)", desc: "Keep customer billing status in sync with your pipeline." },
  { name: "SAP", category: "Enterprise", countries: ["South Africa", "Kenya"], letter: "SAP", gradient: "linear-gradient(135deg,#3D22CC,#5533FF)", desc: "Enterprise-grade connectors for large-scale deployments." },
  { name: "Slack", category: "Communication", countries: ["South Africa", "Kenya", "Mauritius"], letter: "SL", gradient: "linear-gradient(135deg,#E8152A,#FF6B35)", desc: "Get payment, audit and billing alerts where your team works." },
  { name: "Microsoft Teams", category: "Communication", countries: ["South Africa", "Kenya", "Mauritius"], letter: "T", gradient: "linear-gradient(135deg,#5533FF,#4B39E0)", desc: "Route approval requests and notifications into Teams channels." },
  { name: "Zapier", category: "Automation", countries: ["South Africa", "Kenya", "Mauritius"], letter: "Z", gradient: "linear-gradient(135deg,#FF6B35,#FFB020)", desc: "Connect BIPRA to 5,000+ apps with no-code workflows." },
  { name: "Google Workspace", category: "Cloud Storage", countries: ["South Africa", "Kenya", "Mauritius"], letter: "G", gradient: "linear-gradient(135deg,#0A7B3E,#5533FF)", desc: "Export statements and reports straight to Drive and Sheets." },
  { name: "Power BI", category: "Analytics", countries: ["South Africa", "Mauritius"], letter: "P", gradient: "linear-gradient(135deg,#FF6B35,#E8152A)", desc: "Build live dashboards on top of your BIPRA transaction data." },
  { name: "Dropbox", category: "Cloud Storage", countries: ["South Africa", "Kenya", "Mauritius"], letter: "D", gradient: "linear-gradient(135deg,#5533FF,#00C1D4)", desc: "Archive audit trails and generated bills automatically." },
];

export default function IntegrationsClient() {
  const [active, setActive] = useState<Category>("All");
  const [activeCountry, setActiveCountry] = useState<"All" | Country>("All");
  const filtered = INTEGRATIONS.filter(
    (i) => (active === "All" || i.category === active) && (activeCountry === "All" || i.countries.includes(activeCountry))
  );

  return (
    <div id="page-integrations" className="page active pw">
      <section className="section mesh-light" style={{ paddingTop: "100px" }}>
        <div className="inner-n" style={{ textAlign: "center" }}>
          <p className="slabel" style={{ textAlign: "center" }}>Integrations</p>
          <h1 style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: "800", letterSpacing: "-1.5px", marginBottom: "16px", lineHeight: "1.08" }}>
            Connects with <span className="grad-text">the tools you run on</span>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: "1.75", marginBottom: "0", fontWeight: "300" }}>
            BIPRA plugs into your accounting, CRM, and operations stack — no rip-and-replace required.
          </p>
        </div>
      </section>

      <section className="section"><div className="inner">
        <div className="integrations-layout">
          <div className="integrations-filter">
            <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".8px", marginBottom: "14px" }}>Filter by category</div>
            <div className="integrations-filter-list">
              {CATEGORIES.map((c) => (
                <button key={c} className={`integrations-filter-btn${active === c ? " active" : ""}`} onClick={() => setActive(c)}>
                  {c}
                  <span className="integrations-filter-count">{c === "All" ? INTEGRATIONS.length : INTEGRATIONS.filter((i) => i.category === c).length}</span>
                </button>
              ))}
            </div>
            <div style={{ fontSize: "11px", fontWeight: "600", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".8px", margin: "22px 0 14px", paddingTop: "18px", borderTop: "1px solid var(--border)" }}>Filter by country</div>
            <div className="integrations-filter-list">
              <button className={`integrations-filter-btn${activeCountry === "All" ? " active" : ""}`} onClick={() => setActiveCountry("All")}>
                All
                <span className="integrations-filter-count">{INTEGRATIONS.length}</span>
              </button>
              {COUNTRIES.map((c) => (
                <button key={c.code} className={`integrations-filter-btn${activeCountry === c.code ? " active" : ""}`} onClick={() => setActiveCountry(c.code)}>
                  <span style={{ marginRight: "6px", display: "inline-block", width: "22px", padding: "1px 0", fontSize: "9px", fontWeight: "700", textAlign: "center", borderRadius: "3px", background: "var(--pl)", color: "var(--p)" }}>{c.abbr}</span>{c.code}
                  <span className="integrations-filter-count">{INTEGRATIONS.filter((i) => i.countries.includes(c.code)).length}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px" }}>{filtered.length} integration{filtered.length !== 1 ? "s" : ""}</div>
            <div className="integrations-grid">
              {filtered.map((i) => (
                <div key={i.name} className="gcard shine grid-pop tilt integrations-card">
                  <div className="solutions-int-badge" style={{ background: i.gradient, fontSize: i.letter.length > 2 ? "11px" : "15px", margin: "0 0 14px" }}>{i.letter}</div>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>{i.name}</div>
                  <div className="badge b-p" style={{ marginBottom: "8px", fontSize: "10px" }}>{i.category}</div>
                  <div style={{ marginBottom: "10px", display: "flex", gap: "4px", justifyContent: "center" }} title={i.countries.join(", ")}>
                    {i.countries.map((c) => <span key={c} style={{ fontSize: "9px", fontWeight: "700", padding: "2px 6px", borderRadius: "4px", background: "var(--off)", color: "var(--muted)" }}>{COUNTRIES.find((x) => x.code === c)?.abbr}</span>)}
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: "13px", color: "var(--muted)", marginTop: "40px" }}>Don&rsquo;t see what you need? <Link href="/developers" style={{ color: "var(--p)", fontWeight: "600" }}>Build a custom integration with our API →</Link></p>
      </div></section>

      <section className="solutions-cta" style={{ background: "var(--ink)", padding: "80px 5%", textAlign: "center" }}>
        <div className="solutions-cta-glow blob-drift" style={{ width: "420px", height: "420px", top: "-160px", left: "-100px", background: "radial-gradient(circle,rgba(85,51,255,0.35),transparent 70%)" }}></div>
        <div className="solutions-cta-glow blob-drift" style={{ width: "360px", height: "360px", bottom: "-140px", right: "-80px", background: "radial-gradient(circle,rgba(232,21,42,0.25),transparent 70%)", animationDelay: "3s" }}></div>
        <div className="inner-n">
          <h2 style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: "800", color: "#fff", letterSpacing: "-.8px", marginBottom: "16px" }}>Need a connector we don&rsquo;t list?</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "36px" }}>Our REST API and webhooks make custom integrations straightforward.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-w btn-lg" href="/contact">Talk to us</Link>
            <Link className="btn btn-ow btn-lg" href="/developers">View API docs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
