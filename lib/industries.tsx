import type { ReactNode } from "react";

export type IndustryFeature = { slug: string; title: string; desc: string };

export type IndustryKey = "financial" | "government" | "retail" | "rental" | "subscriptions" | "mining";

export type Industry = {
  key: IndustryKey;
  name: string;
  heading: string;
  description: string;
  accent: string;
  accentSoft: string;
  gradient: string;
  mesh: "mesh-light" | "mesh-cool" | "mesh-warm";
  icon: ReactNode;
  products: { label: string; badgeClass: string }[];
  deployment: string;
  features: IndustryFeature[];
};

export const INDUSTRIES: Industry[] = [
  {
    key: "financial",
    name: "Financial Services",
    heading: "Banks, fintechs & lenders",
    description: "From payment processing to audit-ready financial reporting, BIPRA gives financial institutions a compliant, scalable infrastructure layer.",
    accent: "#5533FF",
    accentSoft: "var(--pl)",
    gradient: "linear-gradient(135deg,#5533FF,#7B5FFF)",
    mesh: "mesh-light",
    icon: <path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-6 10 6"></path>,
    products: [{ label: "BipraPay", badgeClass: "b-r" }, { label: "VeriBills", badgeClass: "b-vb" }],
    deployment: "3–5 days",
    features: [
      { slug: "sarb-compliant-rails", title: "SARB-compliant payment rails", desc: "Payment rails built for South African regulation" },
      { slug: "real-time-aml-screening", title: "Real-time AML transaction screening", desc: "Transaction monitoring as payments happen" },
      { slug: "ifrs9-provisioning", title: "IFRS 9 provisioning reports", desc: "Automated financial reporting" },
      { slug: "multi-currency-nostro", title: "Multi-currency nostro management", desc: "Manage accounts across currencies" },
    ],
  },
  {
    key: "government",
    name: "Government & Public Sector",
    heading: "Departments & municipalities",
    description: "Manage budgets across departments, process citizen payments, and maintain compliance with PFMA and MFMA requirements.",
    accent: "#0A7B3E",
    accentSoft: "var(--gl)",
    gradient: "linear-gradient(135deg,#0A7B3E,#00C87A)",
    mesh: "mesh-cool",
    icon: <path d="M12 2 3 7l9 5 9-5-9-5zM3 7v10l9 5 9-5V7"></path>,
    products: [{ label: "Morr ERP", badgeClass: "b-morr" }, { label: "VeriBills", badgeClass: "b-vb" }],
    deployment: "5–7 days",
    features: [
      { slug: "pfma-mfma-compliance", title: "PFMA / MFMA budget compliance", desc: "Budget rules built in" },
      { slug: "auditor-general-exports", title: "Auditor-General export formats", desc: "Reporting formats ready to submit" },
      { slug: "grant-disbursement", title: "Grant disbursement to beneficiaries", desc: "Pay beneficiaries with ID verification" },
      { slug: "digital-document-management", title: "Digital document management", desc: "Paperless departmental workflows" },
    ],
  },
  {
    key: "retail",
    name: "Retail & E-commerce",
    heading: "Online & omnichannel retailers",
    description: "Accept payments at speed, automate supplier invoice processing, and close month-end in a single day with integrated billing and reconciliation.",
    accent: "#E8152A",
    accentSoft: "var(--rl)",
    gradient: "linear-gradient(135deg,#E8152A,#FF6B35)",
    mesh: "mesh-warm",
    icon: <path d="M6 8h12l1 12H5zM9 8V6a3 3 0 0 1 6 0v2"></path>,
    products: [{ label: "BipraPay", badgeClass: "b-r" }, { label: "VeriBills", badgeClass: "b-vb" }],
    deployment: "1–2 days",
    features: [
      { slug: "instant-checkout", title: "Instant checkout via BipraPay", desc: "Sub-second settlement at checkout" },
      { slug: "automated-supplier-payments", title: "Automated supplier payments", desc: "Accounts payable end to end" },
      { slug: "subscription-payments-billing", title: "Subscription payments & billing", desc: "Recurring billing on any cycle" },
      { slug: "real-time-revenue-reconciliation", title: "Real-time revenue reconciliation", desc: "Revenue matched automatically" },
    ],
  },
  {
    key: "rental",
    name: "Rental & Property",
    heading: "Property managers & landlords",
    description: "Bill and collect rent, levies, and utilities from one system, and settle everything straight back through BipraPay.",
    accent: "#0D9488",
    accentSoft: "#E0F5F3",
    gradient: "linear-gradient(135deg,#0D9488,#2DD4BF)",
    mesh: "mesh-light",
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></>,
    products: [{ label: "VeriBills", badgeClass: "b-vb" }, { label: "BipraPay", badgeClass: "b-r" }],
    deployment: "3–5 days",
    features: [
      { slug: "rent-levies-utilities-one-bill", title: "Rent, levies & utilities on one bill", desc: "Tenants pay everything in a single transaction" },
      { slug: "debicheck-rent-collection", title: "DebiCheck-authenticated rent collection", desc: "Compliant, low-failure recurring debit orders" },
      { slug: "tenant-self-service-portal", title: "Tenant self-service portal", desc: "Pay, view statements, and log maintenance requests" },
      { slug: "arrears-payment-plans", title: "Arrears & payment plan management", desc: "Structured recovery for overdue balances" },
    ],
  },
  {
    key: "subscriptions",
    name: "Subscriptions",
    heading: "SaaS & membership businesses",
    description: "Run recurring billing on any cycle, recover failed payments automatically, and reconcile subscription revenue without spreadsheets.",
    accent: "#DB2777",
    accentSoft: "#FCE7F3",
    gradient: "linear-gradient(135deg,#DB2777,#F472B6)",
    mesh: "mesh-cool",
    icon: <><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></>,
    products: [{ label: "BipraPay", badgeClass: "b-r" }, { label: "VeriBills", badgeClass: "b-vb" }],
    deployment: "1–2 days",
    features: [
      { slug: "flexible-billing-cycles", title: "Flexible billing cycles", desc: "Weekly, monthly, or annual charges, per customer" },
      { slug: "automatic-dunning-recovery", title: "Automatic dunning & payment recovery", desc: "Retry and recover failed recurring charges" },
      { slug: "multi-account-management", title: "Multi-account & seat management", desc: "Customers manage multiple subscriptions from one login" },
      { slug: "subscription-revenue-reconciliation", title: "Subscription revenue reconciliation", desc: "Recurring revenue matched automatically" },
    ],
  },
  {
    key: "mining",
    name: "Mining & Resources",
    heading: "Mining & resources operators",
    description: "Pay large, distributed workforces on time, manage supplier and royalty payments, and keep budget and compliance reporting audit-ready.",
    accent: "#475569",
    accentSoft: "#E2E8F0",
    gradient: "linear-gradient(135deg,#475569,#64748B)",
    mesh: "mesh-warm",
    icon: <><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></>,
    products: [{ label: "BipraPay", badgeClass: "b-r" }, { label: "Morr ERP", badgeClass: "b-morr" }],
    deployment: "5–7 days",
    features: [
      { slug: "bulk-payroll-remote-sites", title: "Bulk payroll for remote sites", desc: "Pay thousands of workers in one API call" },
      { slug: "supplier-royalty-payments", title: "Supplier & royalty payments", desc: "Automate accounts payable across contractors" },
      { slug: "budget-compliance-reporting", title: "Budget & compliance reporting", desc: "Auditor-ready exports across cost centres" },
      { slug: "workforce-safety-documentation", title: "Workforce & safety documentation", desc: "Digital records for compliance and audits" },
    ],
  },
];

export function getIndustry(key: IndustryKey): Industry {
  const found = INDUSTRIES.find((i) => i.key === key);
  if (!found) throw new Error(`Unknown industry key: ${key}`);
  return found;
}
