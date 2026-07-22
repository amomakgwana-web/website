export type Article = {
  slug: string;
  badge: "Article" | "Guide" | "Case study";
  title: string;
  desc: string;
  readTime: string;
  relatedHref: string;
  relatedLabel: string;
  stat?: { value: string; label: string };
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "workflow-automation-finops-operations",
    badge: "Article",
    title: "Workflow automation that enables FinOps and Operations to optimise efficiency",
    desc: "How budgeting, approvals, and document workflows collapse from weeks to days when they share one data model.",
    readTime: "4 min read",
    relatedHref: "/morr-erp",
    relatedLabel: "Explore Morr ERP",
    stat: { value: "−79%", label: "Faster budget approval cycle" },
    body: [
      "Most finance and operations teams don't run one system — they run five. A budgeting tool, an HR system, a document repository, an approvals inbox, and a spreadsheet holding it all together. Every handoff between them is a place where data drifts, approvals stall, and audits get harder.",
      "Morr ERP takes the opposite approach: budgeting, HR, and document management share a single data model. An employee record created in HR is the same record a budget line references. A document uploaded for an approval is the same document an auditor pulls later. Nothing gets re-entered, and nothing goes out of sync.",
      "The effect shows up directly in cycle times. Budget approval cycles that used to take 14 days — routed through email chains and manual follow-ups — now take 3 days on average, a 79% reduction. HR document processing, previously running 2 days end to end, drops to about 20 minutes once digital signatures and automated routing replace physical paperwork. Month-end financial close, a perennial 5-day scramble, comes in at under a day when budget reconciliation and actuals reporting pull from a single source.",
      "None of this requires new headcount or a change-management project. It requires the workflows to stop being separate products stitched together after the fact, and start being one system from the beginning.",
    ],
  },
  {
    slug: "cloud-payment-processing-speed",
    badge: "Article",
    title: "Cloud technology with rapid & clear payment timelines",
    desc: "What sub-second payment processing actually requires under the hood — and why most gateways fall short of it.",
    readTime: "3 min read",
    relatedHref: "/biprapay",
    relatedLabel: "Explore BipraPay",
    stat: { value: "748ms", label: "Average time from API call to settled funds" },
    body: [
      "\"Instant payments\" gets used loosely. In practice, most gateways still take seconds — sometimes several — between a payment request and funds actually clearing, because each step (validation, compliance screening, rail selection, settlement) runs as a separate, sequential call to a separate system.",
      "BipraPay's average end-to-end time is 748 milliseconds, broken down roughly as: 12ms to receive and validate the API call, 48ms for real-time AML screening, 8ms to select the fastest compliant rail, and the remainder — about 680ms — for the bank to confirm settlement. Every stage happens inside the same platform, so there's no queueing between systems waiting for a response.",
      "That 748ms average compares to a industry average closer to 2,200ms — roughly three times slower — mostly lost to hand-offs between a payment processor, a separate compliance vendor, and a separate reconciliation system.",
      "The other half of the story is what happens after the money moves: every transaction auto-generates an immutable, SARB-compliant audit record at the same time it settles, rather than requiring a second reconciliation pass days later. Speed and auditability turn out to be the same architectural decision, not a trade-off.",
    ],
  },
  {
    slug: "subscription-billing-technology",
    badge: "Article",
    title: "Subscription technology beyond the common financial ground & schemes",
    desc: "Smart meter billing, tariff engines, and multi-channel delivery for utilities and municipalities.",
    readTime: "4 min read",
    relatedHref: "/veribills",
    relatedLabel: "Explore VeriBills",
    stat: { value: "5 min", label: "Meter reading to delivered bill" },
    body: [
      "Utility and property billing has a structural problem: usage data, tariff rules, and delivery channels are usually three separate systems maintained by three separate teams, and the gap between a meter reading and an actual bill in a customer's hands is measured in days.",
      "VeriBills collapses that gap to about five minutes. Smart meters stream readings in over AMI/AMR protocols (DLMS/COSEM, IEC 62056). A tariff engine prices the usage against whichever structure applies — inclining block tariffs, time-of-use, flat rate, or NRS 047 prepaid tokens — and an itemised bill is generated and delivered automatically.",
      "Delivery isn't a single channel either: the same bill goes out by email, SMS, WhatsApp, a self-service portal, or print, depending on what the customer actually uses. At scale, that pipeline currently handles 3,847 connected smart meters and generates over 14,280 bills a month, with a 99.6% delivery success rate.",
      "For property managers specifically, the same engine handles rent, levies, and prepaid electricity on one bill, settled straight back through BipraPay — so a tenant isn't paying three different systems to live in one building.",
    ],
  },
  {
    slug: "eft-card-instant-rails-guide",
    badge: "Guide",
    title: "Choosing between EFT, card, and instant rails for African payments",
    desc: "A practical comparison of settlement speed, cost, and reach across the payment rails BIPRA supports.",
    readTime: "5 min read",
    relatedHref: "/biprapay",
    relatedLabel: "See BipraPay's multi-rail routing",
    body: [
      "Every payment rail trades off speed, cost, and reach differently, and the right choice depends entirely on what you're paying for.",
      "EFT is the workhorse for bulk and recurring payments — payroll, supplier disbursements, debit-order collections. It's the cheapest per-transaction rail and handles high volumes well, but settlement can take a business day or more, which makes it a poor fit for anything time-sensitive.",
      "Card rails are built for consumer-facing checkout: authorisation happens in seconds and the customer experience is familiar, but interchange and processing fees are higher per transaction, and card isn't practical for B2B or bulk disbursement use cases.",
      "Instant/real-time rails (RTC and similar) sit between the two: near-immediate settlement, suitable for anything where the recipient needs funds now — insurance payouts, gig-worker payments, emergency disbursements — at a cost between EFT and card.",
      "Rather than choosing one rail and living with its limitations, BipraPay's multi-rail routing selects the fastest compliant option per transaction automatically — EFT for a scheduled payroll run, an instant rail for a claims payout, card for a checkout flow — through a single integration and one reconciliation view.",
    ],
  },
  {
    slug: "compliant-billing-5-day-playbook",
    badge: "Guide",
    title: "A 5-day playbook for standing up compliant billing",
    desc: "The rollout sequence utilities and property managers use to go from meter data to delivered bills.",
    readTime: "4 min read",
    relatedHref: "/veribills",
    relatedLabel: "See how VeriBills onboarding works",
    body: [
      "Standing up a new billing system is usually pictured as a multi-month project. For VeriBills customers, it's typically a five-day sequence, because the tariff structures, delivery channels, and compliance requirements are already built in rather than custom-configured from scratch.",
      "Day 1 — Connect: meter data sources are connected via API, FTP, or direct integration (DLMS/COSEM, IEC 62056), and account/property records are imported.",
      "Day 2 — Configure: the relevant tariff structures are set up — inclining block, time-of-use, flat rate, or prepaid token vending — matched against Eskom, municipal, or NERSA rate schedules.",
      "Day 3 — Test run: a full billing cycle is generated against real meter data in a sandbox, checking rating, itemisation, and formatting before anything reaches a customer.",
      "Day 4 — Review and sign-off: compliance and finance stakeholders review sample bills, delivery channels (email, SMS, WhatsApp, portal, print) are switched on, and DebiCheck mandates are configured if debit-order collection is in scope.",
      "Day 5 — Go live: the pipeline runs in production. From here, the meter-to-bill cycle typically settles around five minutes per run, and payment collection reconciles automatically through BipraPay.",
    ],
  },
  {
    slug: "municipality-rollout-audit-case-study",
    badge: "Case study",
    title: "How a 12-municipality rollout cut audit prep from weeks to hours",
    desc: "Immutable, hash-chained audit trails turned a recurring compliance headache into a non-event.",
    readTime: "3 min read",
    relatedHref: "/veribills",
    relatedLabel: "Explore VeriBills",
    body: [
      "MetroMeter Solutions manages prepaid electricity metering across 12 separate municipality contracts — 3,800 meters in total, each governed by its own tariff structure and its own audit and reporting obligations.",
      "Before switching to VeriBills, generating a single monthly billing run took a team of six people three full working days: pulling meter reads manually, cross-checking tariffs per municipality, and assembling the reports each contract required.",
      "\"We manage 3,800 prepaid meters across 12 municipality contracts,\" says Mpho Ndaba, Operations Director at MetroMeter Solutions. \"Before VeriBills, monthly bills took a team of six three full days. Now it runs automatically overnight.\"",
      "The billing cycle itself now runs unattended overnight, with every bill generated against the correct per-municipality tariff and delivered through the appropriate channel. Because every reading, rating decision, and bill is recorded in the same audit trail as it happens — rather than reconstructed afterward — audit preparation that used to consume days of manual reconciliation is now a matter of pulling an existing report.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
