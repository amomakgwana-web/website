import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.desc };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div id="page-article" className="page active pw">
      <section className="section" style={{ paddingTop: "100px" }}>
        <div className="inner-n" style={{ maxWidth: "720px" }}>
          <Link href="/resources" style={{ fontSize: "13px", fontWeight: "600", color: "var(--p)", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>&#8592; Back to Resources</Link>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span className="badge b-p">{article.badge}</span>
            <span style={{ fontSize: "13px", color: "var(--muted)" }}>{article.readTime}</span>
          </div>
          <h1 style={{ fontFamily: "var(--fd)", fontSize: "clamp(30px,4vw,44px)", fontWeight: "800", lineHeight: "1.15", letterSpacing: "-1px", marginBottom: "20px" }}>{article.title}</h1>
          <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: "1.75", fontWeight: "300", marginBottom: "40px" }}>{article.desc}</p>

          {article.stat && (
            <div style={{ background: "var(--off)", borderRadius: "16px", padding: "28px 32px", marginBottom: "40px", display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
              <div className="grad-text" style={{ fontFamily: "var(--fd)", fontSize: "40px", fontWeight: "800", letterSpacing: "-1px", lineHeight: "1" }}>{article.stat.value}</div>
              <div style={{ fontSize: "14px", color: "var(--muted)" }}>{article.stat.label}</div>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {article.body.map((para, i) => (
              <p key={i} style={{ fontSize: "16px", color: "var(--ink2)", lineHeight: "1.85" }}>{para}</p>
            ))}
          </div>

          <div style={{ marginTop: "48px", padding: "28px 32px", background: "var(--off)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>Want to see this in practice?</div>
            <Link className="btn btn-p btn-md" href={article.relatedHref}>{article.relatedLabel} <span>&#8594;</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--off)" }}>
        <div className="inner">
          <p className="slabel">Keep reading</p>
          <h2 className="stitle" style={{ marginBottom: "40px" }}>More from Resources</h2>
          <div className="g3">
            {more.map((a) => (
              <div className="card lift-card" key={a.slug} style={{ background: "#fff" }}>
                <span className="badge b-p" style={{ marginBottom: "16px" }}>{a.badge}</span>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "var(--ink)", lineHeight: "1.4", marginBottom: "12px" }}>{a.title}</h3>
                <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.7", marginBottom: "20px" }}>{a.desc}</p>
                <Link href={`/resources/${a.slug}`} className="btn btn-p btn-md">Read more <span>&#8594;</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
