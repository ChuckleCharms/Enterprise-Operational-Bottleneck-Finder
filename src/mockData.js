// src/mockData.js

// ===== Helpers =====
const rand = (min, max) => Math.random() * (max - min) + min;
const rint = (min, max) => Math.floor(rand(min, max));
const pick = (arr) => arr[rint(0, arr.length)];

const STATUSES = ["Healthy", "At Risk", "Delayed", "Blocked"];
const SEVERITIES = ["Low", "Medium", "High", "Critical"];
const DEPTS = ["Manufacturing", "Logistics", "Support", "IT", "Procurement"];
const CONSTRAINTS = [
  "WIP overload at Assembly",
  "Queue buildup before QA",
  "SLA breach risk in Tier-2 Support",
  "Material shortage – Supplier A",
  "Deployment approval latency",
];

function makeSeries(points = 30, base = 100, volatility = 8) {
  const out = [];
  let v = base;
  for (let i = 0; i < points; i++) {
    v += rand(-volatility, volatility);
    if (v < 10) v = 10;
    out.push(Number(v.toFixed(2)));
  }
  return out;
}

// ===== Overview KPIs =====
export const overviewKpis = [
  {
    label: "Active Cases",
    value: 482,
    delta: +12,
    tone: "info",
  },
  {
    label: "Primary Constraint",
    value: "Assembly Line A",
    delta: -3,
    tone: "warn",
  },
  {
    label: "SLA Risk %",
    value: "7.4%",
    delta: -1.2,
    tone: "good",
  },
  {
    label: "Throughput / Day",
    value: 136,
    delta: +4.6,
    tone: "good",
  },
];

export const overviewThroughputSeries = makeSeries(40, 120, 6);
export const overviewCycleTimeSeries = makeSeries(40, 18, 2);

// ===== Markets (generic operational index mock) =====
export const marketIndexes = [
  { symbol: "OPSX", value: 1423.6, change: +0.84 },
  { symbol: "MFGI", value: 892.2, change: -0.31 },
  { symbol: "LOGI", value: 512.4, change: +1.24 },
  { symbol: "SUPT", value: 311.8, change: +0.12 },
  { symbol: "ITDX", value: 765.3, change: -0.56 },
];

// ===== Screener =====
export const screenerRows = Array.from({ length: 20 }).map((_, i) => {
  const slaRisk = rand(1, 15);
  return {
    id: `scr_${i}`,
    process: `Process-${i + 1}`,
    department: pick(DEPTS),
    slaRisk: `${slaRisk.toFixed(1)}%`,
    wip: rint(12, 240),
    status: pick(STATUSES),
  };
});

// ===== Portfolio (initiatives) =====
export const portfolioRows = [
  {
    id: "init_01",
    name: "Assembly Optimization",
    owner: "Ops Lead",
    impact: "High",
    roi: "3.4x",
    status: "In Progress",
  },
  {
    id: "init_02",
    name: "QA Automation",
    owner: "Engineering",
    impact: "Medium",
    roi: "2.1x",
    status: "Planned",
  },
  {
    id: "init_03",
    name: "Supplier Diversification",
    owner: "Procurement",
    impact: "High",
    roi: "4.8x",
    status: "In Review",
  },
];

// ===== Orders =====
export const ordersRows = Array.from({ length: 12 }).map((_, i) => ({
  id: `ord_${1000 + i}`,
  type: pick(["Reallocate Capacity", "Expedite Case", "Adjust SLA"]),
  target: pick(["Assembly A", "QA Stage", "Support Tier-2"]),
  status: pick(["Queued", "Running", "Completed", "Failed"]),
  createdAt: new Date(Date.now() - rint(0, 72) * 3600000).toLocaleString(),
}));

// ===== Strategy Lab =====
export const strategies = [
  {
    id: "str_01",
    name: "WIP Cap Enforcement",
    description:
      "Automatically enforce WIP limits based on rolling cycle time percentile.",
    status: "Active",
  },
  {
    id: "str_02",
    name: "Dynamic Reassignment",
    description:
      "Reassign cases to lowest-load team based on SLA and queue depth.",
    status: "Draft",
  },
];

// ===== Backtest =====
export const backtestSeries = makeSeries(60, 100, 5);

// ===== Risk =====
export const riskMatrix = Array.from({ length: 10 }).map((_, i) => ({
  id: `risk_${i}`,
  item: pick(CONSTRAINTS),
  severity: pick(SEVERITIES),
  likelihood: `${rint(10, 90)}%`,
  owner: pick(DEPTS),
}));

// ===== News & Sentiment =====
export const newsItems = Array.from({ length: 8 }).map((_, i) => ({
  id: `news_${i}`,
  title: `Operational update #${i + 1}`,
  source: pick(["Internal Ops Report", "Vendor Bulletin", "IT Advisory"]),
  sentiment: pick(["Positive", "Neutral", "Negative"]),
  summary:
    "Recent operational signal indicates potential variance in throughput or queue depth across monitored pipelines.",
}));

// ===== AI Gathering =====
export const aiSignals = Array.from({ length: 6 }).map((_, i) => ({
  id: `ai_${i}`,
  model: pick(["ConstraintNet", "QueueSense", "FlowPredictor"]),
  signal: pick(CONSTRAINTS),
  confidence: `${rint(72, 98)}%`,
  status: pick(["New", "Acknowledged", "Actioned"]),
}));

// ===== Pipelines =====
export const pipelines = [
  {
    id: "pipe_01",
    name: "Manufacturing Intake",
    status: "Healthy",
    latency: "320ms",
    events24h: 14230,
  },
  {
    id: "pipe_02",
    name: "Support Ticket Stream",
    status: "At Risk",
    latency: "810ms",
    events24h: 9320,
  },
  {
    id: "pipe_03",
    name: "QA Feedback Loop",
    status: "Healthy",
    latency: "280ms",
    events24h: 4510,
  },
];

// ===== Model Lab =====
export const models = [
  {
    id: "mdl_01",
    name: "Constraint Classifier v3",
    version: "3.2.1",
    accuracy: "91.4%",
    status: "Production",
  },
  {
    id: "mdl_02",
    name: "SLA Risk Forecaster",
    version: "1.8.0",
    accuracy: "87.2%",
    status: "Staging",
  },
];

// ===== Agents =====
export const agents = [
  {
    id: "agt_01",
    name: "Capacity Agent",
    scope: "Manufacturing",
    actions24h: 48,
    status: "Online",
  },
  {
    id: "agt_02",
    name: "SLA Guardian",
    scope: "Support",
    actions24h: 112,
    status: "Online",
  },
  {
    id: "agt_03",
    name: "Procurement Scout",
    scope: "Procurement",
    actions24h: 9,
    status: "Idle",
  },
];

// ===== Monitoring =====
export const alerts = Array.from({ length: 14 }).map((_, i) => ({
  id: `alert_${i}`,
  title: pick(CONSTRAINTS),
  severity: pick(SEVERITIES),
  createdAt: new Date(Date.now() - rint(0, 48) * 3600000).toLocaleString(),
  status: pick(["Open", "Acknowledged", "Resolved"]),
}));

// ===== Education Center =====
export const educationModules = [
  {
    id: "edu_01",
    title: "Theory of Constraints – Practical Guide",
    duration: "42 min",
    level: "Intermediate",
  },
  {
    id: "edu_02",
    title: "Designing SLA-Driven Operations",
    duration: "35 min",
    level: "Advanced",
  },
  {
    id: "edu_03",
    title: "Simulation for Bottleneck Relief",
    duration: "28 min",
    level: "Beginner",
  },
];
