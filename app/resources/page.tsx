import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles, guides, and use-cases on payments, billing, and enterprise workflow automation from the BIPRA team.",
};

const ARTICLES = [
  {
    badge: "Article",
    title: "Workflow automation that enables FinOps and Operations to optimise efficiency",
    desc: "How budgeting, approvals, and document workflows collapse from weeks to days when they share one data model.",
    href: "/morr-erp",
  },
  {
    badge: "Article",
    title: "Cloud technology with rapid & clear payment timelines",
    desc: "What sub-second payment processing actually requires under the hood — and why most gateways fall short of it.",
    href: "/biprapay",
  },
  {
    badge: "Article",
    title: "Subscription technology beyond the common financial ground & schemes",
    desc: "Smart meter billing, tariff engines, and multi-channel delivery for utilities and municipalities.",
    href: "/veribills",
  },
  {
    badge: "Guide",
    title: "Choosing between EFT, card, and instant rails for African payments",
    desc: "A practical comparison of settlement speed, cost, and reach across the payment rails BIPRA supports.",
    href: "/biprapay",
  },
  {
    badge: "Guide",
    title: "A 5-day playbook for standing up compliant billing",
    desc: "The rollout sequence utilities and property managers use to go from meter data to delivered bills.",
    href: "/veribills",
  },
  {
    badge: "Case study",
    title: "How a 12-municipality rollout cut audit prep from weeks to hours",
    desc: "Immutable, hash-chained audit trails turned a recurring compliance headache into a non-event.",
    href: "/solutions",
  },
];

export default function Page() {
  return (
    <div id="page-resources" className="page active pw">
      <section className="section" style={{ paddingTop: "100px", background: "linear-gradient(135deg,var(--px) 0%,#fff 60%)" }}>
        <div className="inner-n" style={{ textAlign: "center" }}>
          <p className="slabel" style={{ textAlign: "center" }}>Resources</p>
          <h1 style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: "800", letterSpacing: "-1.5px", marginBottom: "16px", lineHeight: "1.08" }}>
            Articles, guides &amp; <span className="grad-text">use-cases</span>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: "1.75", marginBottom: "0", fontWeight: "300" }}>
            Practical reading on payments, billing, and enterprise workflow automation from the BIPRA team.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <div className="g3">
            {ARTICLES.map((a) => (
              <div className="card lift-card" key={a.title}>
                <span className="badge b-p" style={{ marginBottom: "16px" }}>{a.badge}</span>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "var(--ink)", lineHeight: "1.4", marginBottom: "12px" }}>{a.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", marginBottom: "20px" }}>{a.desc}</p>
                <Link href={a.href} className="btn btn-p btn-md">Read more <span>&#8594;</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "var(--ink)", padding: "80px 5%", textAlign: "center" }}>
        <div className="inner-n">
          <h2 style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: "800", color: "#fff", letterSpacing: "-.8px", marginBottom: "16px" }}>
            Have a question our docs don&apos;t cover?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "36px" }}>Talk to our team, or dig into the API reference.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-w btn-lg" href="/contact">Contact us</Link>
            <Link className="btn btn-ow btn-lg" href="/developers">Browse developer docs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
