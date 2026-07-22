import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Product = {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  logo: string;
  logoBg?: string;
  accent: string;
};

const PRODUCTS: Product[] = [
  { slug: "biprapay", name: "BipraPay", tagline: "Payments, audit & instant gateway", url: "https://www.biprapay.com", logo: "/biprapay-logo.png", accent: "#E8152A" },
  { slug: "veribills", name: "VeriBills", tagline: "Bill presentment & smart metering", url: "https://www.veribills.com", logo: "/veribills-logo.png", accent: "#1800AD" },
  { slug: "morr-erp", name: "Morr ERP", tagline: "Enterprise workflow automation", url: "https://www.morrerp.com", logo: "/morr-icon.png", logoBg: "var(--mol)", accent: "#FF6B35" },
];

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }): Promise<Metadata> {
  const { product } = await params;
  const p = PRODUCTS.find((x) => x.slug === product);
  if (!p) return {};
  return { title: `Sign in to ${p.name}` };
}

export default async function Page({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  const p = PRODUCTS.find((x) => x.slug === product);
  if (!p) notFound();

  return (
    <div id="page-signin" className="page active pw">
      <section className="section" style={{ paddingTop: "140px", paddingBottom: "140px", minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="inner-n" style={{ maxWidth: "440px", textAlign: "center" }}>
          <Link className="logo" href="/" style={{ display: "inline-flex", justifyContent: "center", marginBottom: "40px" }}><span className="logotext">bipra</span></Link>
          <div style={{ width: "64px", height: "64px", borderRadius: "16px", overflow: p.logoBg ? "visible" : "hidden", background: p.logoBg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", boxShadow: "var(--sh)" }}>
            <img src={p.logo} alt="" style={p.logoBg ? { width: "32px", height: "32px", objectFit: "contain" } : { width: "64px", height: "64px", objectFit: "cover" }} />
          </div>
          <h1 style={{ fontFamily: "var(--fd)", fontSize: "26px", fontWeight: "800", letterSpacing: "-.5px", marginBottom: "8px" }}>Signing in to {p.name}</h1>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "8px" }}>{p.tagline}</p>
          <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.7", marginBottom: "32px" }}>
            You&rsquo;re being handed off to {p.name}&rsquo;s own sign-in page, hosted separately from the BIPRA marketing site. Your account and data live there, not here.
          </p>
          <a className="btn btn-lg" style={{ width: "100%", justifyContent: "center", background: p.accent, color: "#fff", marginBottom: "16px" }} href={p.url} target="_blank" rel="noreferrer">
            Continue to {p.name} login <span>&#8594;</span>
          </a>
          <Link href="/" style={{ fontSize: "13px", fontWeight: "600", color: "var(--muted)" }}>&#8592; Back to bipra.com</Link>
        </div>
      </section>
    </div>
  );
}
