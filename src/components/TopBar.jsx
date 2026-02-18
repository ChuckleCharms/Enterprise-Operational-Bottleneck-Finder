// src/components/TopBar.jsx
import React, { useMemo, useState } from "react";
import { Button, Badge, Input } from "../ui";

function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "U";
  const a = (parts[0][0] || "U").toUpperCase();
  const b = (parts[1]?.[0] || "").toUpperCase();
  return (a + b).slice(0, 2);
}

export default function TopBar({
  product,
  workspace,
  user,
  nav = [],
  activeKey,
  onNavigate,
  onLogout,
  actions = [],
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return nav;
    return nav.filter((n) => n.label.toLowerCase().includes(q));
  }, [nav, query]);

  return (
    <div className="topbar">
      <div className="topbarInner">
        {/* Left: Brand */}
        <div className="brandRow">
          <div className="brandDot" aria-hidden />
          <div className="brandText">
            <div className="brandTitle">{product}</div>
            <div className="brandSub">
              {workspace} • <span className="mono">Production</span>
            </div>
          </div>
        </div>

        {/* Center: Navigation pills (top rail only, no side rail) */}
        <div className="navRow" role="navigation" aria-label="Top navigation">
          <div style={{ minWidth: 220, maxWidth: 320, width: "100%" }}>
            <Input
              value={query}
              onChange={setQuery}
              placeholder="Search modules… (e.g., Risk, Monitoring, Backtest)"
            />
          </div>

          <div className="pillRow" style={{ justifyContent: "center" }}>
            {filtered.slice(0, 8).map((n) => (
              <button
                key={n.key}
                className={`navPill ${n.key === activeKey ? "active" : ""}`}
                onClick={() => onNavigate && onNavigate(n.key)}
                title={n.label}
              >
                {n.label}
              </button>
            ))}
            {filtered.length > 8 ? (
              <Badge tone="neutral">+{filtered.length - 8} more</Badge>
            ) : null}
          </div>
        </div>

        {/* Right: User & Actions */}
        <div className="userRow">
          <div className="userMeta">
            <div className="userName">
              {user?.name || "User"}{" "}
              <Badge tone="info" className="mono">
                {user?.env || "Prod"}
              </Badge>
            </div>
            <div className="userRole">
              {user?.role || "Member"} • {user?.email || "user@company.com"}
            </div>
          </div>

          <div
            className="avatar"
            aria-hidden
            style={{
              width: 36,
              height: 36,
              borderRadius: 14,
              display: "grid",
              placeItems: "center",
              border: "1px solid rgba(255,255,255,.12)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
              boxShadow: "0 14px 28px rgba(0,0,0,.35)",
              fontWeight: 900,
              letterSpacing: ".4px",
            }}
          >
            {initials(user?.name || "User")}
          </div>

          <div className="userActions">
            {actions.map((a) => (
              <Button
                key={a.key}
                variant={a.variant || "default"}
                onClick={a.onClick}
              >
                {a.label}
              </Button>
            ))}
            <Button variant="ghost" onClick={onLogout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
