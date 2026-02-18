// src/App.jsx
import React, { useMemo, useState } from "react";
import "./styles.css";

import { AppShell, Button, Card, Input, Select, Badge } from "./ui";
import TopBar from "./components/TopBar";
import TickerTape from "./components/TickerTape";

import Overview from "./pages/Overview";
import Markets from "./pages/Markets";
import Screener from "./pages/Screener";
import Portfolio from "./pages/Portfolio";
import Orders from "./pages/Orders";
import StrategyLab from "./pages/StrategyLab";
import Backtest from "./pages/Backtest";
import Risk from "./pages/Risk";
import NewsSentiment from "./pages/NewsSentiment";
import AIGathering from "./pages/AIGathering";
import Pipelines from "./pages/Pipelines";
import ModelLab from "./pages/ModelLab";
import Agents from "./pages/Agents";
import Monitoring from "./pages/Monitoring";
import EducationCenter from "./pages/EducationCenter";

const PAGES = [
  { key: "Overview", label: "Overview", el: Overview },
  { key: "Markets", label: "Markets", el: Markets },
  { key: "Screener", label: "Screener", el: Screener },
  { key: "Portfolio", label: "Portfolio", el: Portfolio },
  { key: "Orders", label: "Orders", el: Orders },
  { key: "StrategyLab", label: "Strategy Lab", el: StrategyLab },
  { key: "Backtest", label: "Backtest", el: Backtest },
  { key: "Risk", label: "Risk", el: Risk },
  { key: "NewsSentiment", label: "News & Sentiment", el: NewsSentiment },
  { key: "AIGathering", label: "AI Gathering", el: AIGathering },
  { key: "Pipelines", label: "Pipelines", el: Pipelines },
  { key: "ModelLab", label: "Model Lab", el: ModelLab },
  { key: "Agents", label: "Agents", el: Agents },
  { key: "Monitoring", label: "Monitoring", el: Monitoring },
  { key: "EducationCenter", label: "Education Center", el: EducationCenter },
];

function formatTime(d = new Date()) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function Login({ onLogin }) {
  const [email, setEmail] = useState("ops.lead@acme-enterprise.com");
  const [password, setPassword] = useState("••••••••");
  const [workspace, setWorkspace] = useState("ACME Manufacturing");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const canLogin = email.trim().length > 4 && workspace.trim().length > 2;

  return (
    <div className="loginWrap">
      <div className="loginBgGlow" />
      <div className="loginCard">
        <div className="loginBrandRow">
          <div className="brandMark" aria-hidden />
          <div>
            <div className="brandName">Enterprise Ops Console</div>
            <div className="brandTag">
              Operational Intelligence • Bottleneck Finder • Simulation • Alerts
            </div>
          </div>
        </div>

        <div className="loginTitle">Sign in</div>
        <div className="loginSub">
          Use your corporate credentials to access governed operational
          analytics.
        </div>

        {error ? <div className="loginError">{error}</div> : null}

        <div className="loginForm">
          <label className="field">
            <div className="label">Workspace</div>
            <Select
              value={workspace}
              onChange={setWorkspace}
              options={[
                "ACME Manufacturing",
                "Northwind Logistics",
                "Helios Support Ops",
                "Contoso Enterprise IT",
              ]}
            />
          </label>

          <label className="field">
            <div className="label">Email</div>
            <Input
              value={email}
              onChange={setEmail}
              placeholder="name@company.com"
            />
          </label>

          <label className="field">
            <div className="label">Password</div>
            <Input
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              type="password"
            />
          </label>

          <div className="loginRow">
            <label className="checkRow">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>Keep me signed in</span>
            </label>

            <button
              className="linkBtn"
              onClick={() =>
                setError(
                  "Password reset is disabled in demo mode. (This is a customer UI mock.)"
                )
              }
            >
              Forgot password?
            </button>
          </div>

          <Button
            variant="primary"
            disabled={!canLogin}
            onClick={() => {
              setError("");
              if (!canLogin) return;
              onLogin({
                email,
                workspace,
                remember,
                role: "Operations Lead",
              });
            }}
          >
            Sign in
          </Button>

          <div className="loginDivider">
            <span>or</span>
          </div>

          <Button
            variant="ghost"
            onClick={() =>
              onLogin({
                email: "sso.user@acme-enterprise.com",
                workspace,
                remember: true,
                role: "Program Manager",
                sso: true,
              })
            }
          >
            Continue with SSO (Demo)
          </Button>

          <div className="loginFooter">
            By signing in, you agree to governed usage, audit logging, and data
            policy enforcement.
          </div>
        </div>
      </div>

      <div className="loginSide">
        <div className="sideHero">
          <div className="sideTitle">Execution speed matters.</div>
          <div className="sideCopy">
            Identify constraints, quantify delay, simulate interventions, and
            keep teams aligned with alert-driven operations.
          </div>
          <div className="sideBadges">
            <Badge tone="good">Audit-ready</Badge>
            <Badge tone="info">Multi-tenant</Badge>
            <Badge tone="warn">SLA risk</Badge>
            <Badge tone="neutral">Simulation</Badge>
          </div>

          <div className="sideKpis">
            <div className="kpi">
              <div className="kpiLabel">Live Status</div>
              <div className="kpiValue">
                <span className="dotLive" /> Online
              </div>
            </div>
            <div className="kpi">
              <div className="kpiLabel">Region</div>
              <div className="kpiValue">US-West</div>
            </div>
            <div className="kpi">
              <div className="kpiLabel">Last Deploy</div>
              <div className="kpiValue">2h ago</div>
            </div>
            <div className="kpi">
              <div className="kpiLabel">Local Time</div>
              <div className="kpiValue">{formatTime()}</div>
            </div>
          </div>

          <div className="sideNote">
            Demo UI: all actions are simulated, but the experience matches a
            production console.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [session, setSession] = useState(null);
  const [active, setActive] = useState("Overview");

  const ActivePage = useMemo(() => {
    return (PAGES.find((p) => p.key === active) || PAGES[0]).el;
  }, [active]);

  const nav = useMemo(
    () =>
      PAGES.map((p) => ({
        key: p.key,
        label: p.label,
      })),
    []
  );

  if (!session) {
    return (
      <div className="appRoot">
        <Login
          onLogin={(s) => {
            setSession({
              ...s,
              signedInAt: new Date().toISOString(),
              env: "Production",
              tenantId: "tnt_acme_001",
            });
            setActive("Overview");
          }}
        />
      </div>
    );
  }

  return (
    <div className="appRoot">
      <TopBar
        product="Enterprise Ops Console"
        workspace={session.workspace}
        user={{
          name: session.email.split("@")[0].replace(".", " "),
          email: session.email,
          role: session.role,
          env: session.env,
        }}
        nav={nav}
        activeKey={active}
        onNavigate={setActive}
        onLogout={() => setSession(null)}
        actions={[
          {
            key: "refresh",
            label: "Refresh",
            variant: "ghost",
            onClick: () => window.location.reload(),
          },
          {
            key: "new-run",
            label: "Run Analysis",
            variant: "primary",
            onClick: () => setActive("Monitoring"),
          },
        ]}
      />

      <TickerTape />

      <AppShell>
        <div className="pageWrap">
          <Card className="pageHeader">
            <div className="pageHeaderLeft">
              <div className="pageTitle">{active}</div>
              <div className="pageMeta">
                Tenant: <span className="mono">{session.tenantId}</span> •{" "}
                Signed in:{" "}
                <span className="mono">
                  {new Date(session.signedInAt).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="pageHeaderRight">
              <Badge tone="info">Governed</Badge>
              <Badge tone="neutral">Audit Logging</Badge>
              <Badge tone="good">Healthy</Badge>
            </div>
          </Card>

          <div className="pageBody">
            <ActivePage
              session={session}
              navigate={setActive}
              toast={(msg) => {
                // simple toast via alert for demo; ui.jsx will add nicer later
                // keep it functional now
                window.alert(msg);
              }}
            />
          </div>

          <div className="footer">
            <div className="footerLeft">
              © {new Date().getFullYear()} Enterprise Ops Console •{" "}
              <span className="muted">Operational Bottleneck Finder</span>
            </div>
            <div className="footerRight">
              <button
                className="linkBtn"
                onClick={() =>
                  window.alert(
                    "Demo UI: Privacy, Terms, and Data Policy pages are not included in this mock."
                  )
                }
              >
                Privacy & Terms
              </button>
              <span className="sep">•</span>
              <button
                className="linkBtn"
                onClick={() =>
                  window.alert(
                    "Support: support@enterprise-ops-console.example (demo)"
                  )
                }
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </AppShell>
    </div>
  );
}
