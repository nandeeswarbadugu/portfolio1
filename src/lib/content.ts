export const profile = {
  name: "Nandeeswar Badugu",
  shortName: "NB",
  role: "Infrastructure Engineer",
  location: "USA",
  school: "University of Houston–Clear Lake",
  summary:
    "I build reliable, automated infrastructure across DevOps, SRE, and platform engineering — and I am expanding into HPC, GPU clusters, and MLOps.",
  github: "https://github.com/nandeeswarbadugu",
  githubUser: "nandeeswarbadugu",
  site: "https://nandeeswar.dev",
  domain: "nandeeswar.dev",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
];

export const about = [
  "I work at the intersection of cloud platforms, containers, and operational reliability. The goal is the same whether the surface is Kubernetes, Terraform, or a CI pipeline: systems that are observable, repeatable, and boring in the best way.",
  "The public work below is taken from my own GitHub repositories — HPC notes, a geophysics capstone, application code, and on-chain projects. Forks of other people’s repos stay off this page.",
];

export const stack = [
  {
    title: "Cloud",
    items: ["AWS", "Azure", "GCP", "Multi-cloud"],
  },
  {
    title: "Platforms",
    items: ["Kubernetes", "Docker", "Helm", "EKS / AKS / GKE"],
  },
  {
    title: "DevOps & IaC",
    items: ["Terraform", "Ansible", "CloudFormation", "Argo CD"],
  },
  {
    title: "Delivery",
    items: ["GitHub Actions", "GitLab CI", "Jenkins"],
  },
  {
    title: "Observability",
    items: ["Prometheus", "Grafana", "OpenTelemetry", "Splunk"],
  },
  {
    title: "Ops",
    items: ["PagerDuty", "ServiceNow", "IAM", "DNS", "VPN"],
  },
  {
    title: "Systems",
    items: ["Linux", "Networking", "Load balancing"],
  },
  {
    title: "Automation",
    items: ["Python", "Bash", "PowerShell"],
  },
  {
    title: "Data",
    items: ["RDS", "PostgreSQL", "Redis", "MongoDB"],
  },
];

export const areas = ["All", "HPC & ML", "Software", "Web3"] as const;
export type Area = (typeof areas)[number];

export type Project = {
  title: string;
  area: Exclude<Area, "All">;
  tag: string;
  year: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Seismic acquisition survey simulator",
    area: "HPC & ML",
    tag: "Python · Tkinter",
    year: "2026",
    description:
      "Capstone desktop app for survey geometry. It lays out sources and receivers, then computes common midpoints, fold coverage, and offset distribution so a plan can be checked before anyone goes to the field.",
    href: "https://github.com/nandeeswarbadugu/Capstone-3D-Seismic-Acquisition-Mapping-System",
  },
  {
    title: "HPC learning notes",
    area: "HPC & ML",
    tag: "HPC",
    year: "2026",
    description:
      "A structured field guide from cluster architecture through MPI, OpenMP, CUDA, SLURM, Apptainer, and performance notes — written from hands-on cluster use, courses, and docs.",
    href: "https://github.com/nandeeswarbadugu/HPC-Learning-Notes",
  },
  {
    title: "sens-ai",
    area: "Software",
    tag: "Next.js · Gemini",
    year: "2025",
    description:
      "A career-growth product in Next.js. Auth is Clerk, data is Prisma, background work runs through Inngest, and Google’s Generative AI SDK sits behind the product features.",
    href: "https://github.com/nandeeswarbadugu/sens-ai",
  },
  {
    title: "USDS",
    area: "Web3",
    tag: "Solidity · Hardhat",
    year: "2025",
    description:
      "An ERC-20-style token with issue and redeem, transfer fees, pause, blacklist, and a deprecation path onto an upgraded address. Contracts live beside a Hardhat config and tests.",
    href: "https://github.com/nandeeswarbadugu/USDS",
  },
  {
    title: "Product microservice",
    area: "Software",
    tag: "Java · Spring Boot",
    year: "2024",
    description:
      "A Spring Boot product service backed by MongoDB, with Testcontainers wired into the test suite so the service is exercised against a real database.",
    href: "https://github.com/nandeeswarbadugu/java-microservice",
  },
  {
    title: "Anchor vault",
    area: "Web3",
    tag: "Rust · Solana",
    year: "2024",
    description:
      "A Solana program written with Anchor. The repo includes the Rust program, migrations, and TypeScript tests for a vault.",
    href: "https://github.com/nandeeswarbadugu/anchor-vault",
  },
];

export const focus = {
  title: "HPC & AI infrastructure",
  body: "I am building toward the compute, networking, storage, and orchestration layer that ML workloads need at scale — not just training notebooks, but the cluster they run on.",
  exploring: [
    "SLURM",
    "MPI",
    "OpenMP",
    "CUDA",
    "Parallel computing",
    "GPU workloads",
    "Apptainer",
    "Kubernetes for AI/ML",
    "Model deployment",
    "MLOps",
  ],
};
