import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles across Engineering, Product & Design, Sales & Partnerships, and Customer Success at BIPRA.",
};

const DEPARTMENTS: { name: string; roles: { title: string; location: string; type: string }[] }[] = [
  {
    name: "Engineering",
    roles: [
      { title: "Senior Backend Engineer — Payments", location: "Johannesburg", type: "Full-time" },
      { title: "Frontend Engineer — Product", location: "Johannesburg · Remote-friendly", type: "Full-time" },
    ],
  },
  {
    name: "Product & Design",
    roles: [
      { title: "Product Designer", location: "Johannesburg", type: "Full-time" },
      { title: "Product Manager — Billing", location: "Johannesburg", type: "Full-time" },
    ],
  },
  {
    name: "Sales & Partnerships",
    roles: [
      { title: "Enterprise Account Executive", location: "Johannesburg", type: "Full-time" },
      { title: "Partnerships Manager — East Africa", location: "Nairobi", type: "Full-time" },
    ],
  },
  {
    name: "Customer Success",
    roles: [
      { title: "Customer Success Manager", location: "Johannesburg", type: "Full-time" },
      { title: "Technical Support Engineer", location: "Johannesburg", type: "Full-time" },
    ],
  },
];

const BENEFITS = [
  { title: "Equity for everyone", desc: "Every full-time hire gets a stake in what we're building." },
  { title: "Learning budget", desc: "Annual allowance for courses, conferences, and books." },
  { title: "Remote-friendly", desc: "Core team is in Johannesburg; several roles work from anywhere in South Africa." },
  { title: "Health cover", desc: "Medical aid contribution from day one." },
];

export default function Page() {
  return (
    <div id="page-careers" className="page active pw">
      <section className="section" style={{ paddingTop: "100px", background: "var(--p)" }}>
        <div className="inner-n" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Careers</p>
          <h1 style={{ fontFamily: "var(--fd)", fontSize: "clamp(36px,4.5vw,54px)", fontWeight: "800", lineHeight: "1.07", letterSpacing: "-1.5px", color: "#fff", marginBottom: "20px" }}>
            Help build the financial<br />backbone of Africa
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", maxWidth: "560px", margin: "0 auto", fontWeight: "300" }}>
            We&rsquo;re growing fast across South Africa, Kenya, and Mauritius, and looking for people who care about the problem as much as the craft.
          </p>
        </div>
      </section>

      <section className="section"><div className="inner">
        <p className="slabel">Open roles</p>
        <h2 className="stitle" style={{ marginBottom: "48px" }}>{DEPARTMENTS.reduce((n, d) => n + d.roles.length, 0)} positions across {DEPARTMENTS.length} teams</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {DEPARTMENTS.map((dept) => (
            <div key={dept.name}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <h3 style={{ fontFamily: "var(--fd)", fontSize: "18px", fontWeight: "700", color: "var(--ink)" }}>{dept.name}</h3>
                <span className="badge b-g">{dept.roles.length} open</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {dept.roles.map((role) => (
                  <div key={role.title} className="gcard" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", borderRadius: "12px", flexWrap: "wrap", gap: "12px" }}>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "var(--ink)", marginBottom: "4px" }}>{role.title}</div>
                      <div style={{ fontSize: "12.5px", color: "var(--muted)" }}>{role.location} &middot; {role.type}</div>
                    </div>
                    <Link className="btn btn-p btn-md" href="/contact">Apply</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="section" style={{ background: "var(--off)" }}><div className="inner">
        <p className="slabel">Why BIPRA</p>
        <h2 className="stitle" style={{ marginBottom: "48px" }}>What you get</h2>
        <div className="g2">
          {BENEFITS.map((b) => (
            <div key={b.title} className="gcard shine grid-pop tilt" style={{ padding: "28px", borderRadius: "16px" }}>
              <div style={{ fontFamily: "var(--fd)", fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>{b.title}</div>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.75" }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section style={{ background: "var(--ink)", padding: "80px 5%", textAlign: "center" }}>
        <div className="inner-n">
          <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(26px,3vw,38px)", fontWeight: "800", color: "#fff", letterSpacing: "-.8px", marginBottom: "16px" }}>Don&rsquo;t see the right role?</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "36px" }}>We&rsquo;re always open to hearing from exceptional people. Send us a general application and we&rsquo;ll keep you in mind.</p>
          <Link className="btn btn-w btn-lg" href="/contact">Get in touch</Link>
        </div>
      </section>
    </div>
  );
}
