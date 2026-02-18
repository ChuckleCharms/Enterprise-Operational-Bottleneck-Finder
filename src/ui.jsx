// src/ui.jsx
import React from "react";

/* ===============================
   AppShell
   =============================== */
export function AppShell({ children }) {
  return <div className="shell">{children}</div>;
}

/* ===============================
   Card
   =============================== */
export function Card({ children, className = "", pad = true }) {
  return (
    <div className={`card ${pad ? "pad" : ""} ${className}`}>{children}</div>
  );
}

/* ===============================
   Button
   =============================== */
export function Button({
  children,
  onClick,
  variant = "default", // default | primary | ghost
  disabled = false,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn ${variant !== "default" ? variant : ""} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

/* ===============================
   Input
   =============================== */
export function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) {
  return (
    <input
      className={`input ${className}`}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
      type={type}
    />
  );
}

/* ===============================
   Textarea
   =============================== */
export function Textarea({ value, onChange, placeholder, className = "" }) {
  return (
    <textarea
      className={`textarea ${className}`}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

/* ===============================
   Select
   =============================== */
export function Select({ value, onChange, options = [], className = "" }) {
  return (
    <select
      className={`select ${className}`}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

/* ===============================
   Badge
   tone: good | info | warn | neutral
   =============================== */
export function Badge({ children, tone = "neutral", className = "" }) {
  return <span className={`badge ${tone} ${className}`}>{children}</span>;
}

/* ===============================
   StatCard (for KPIs)
   =============================== */
export function StatCard({ label, value, delta, tone = "neutral", onClick }) {
  const deltaSign = typeof delta === "number" ? (delta > 0 ? "+" : "") : "";

  return (
    <Card className="statCard" pad>
      <div className="statTop">
        <div className="statLabel">{label}</div>
        {delta !== undefined && (
          <Badge tone={tone}>
            {deltaSign}
            {delta}
          </Badge>
        )}
      </div>
      <div className="statValue">{value}</div>
      {onClick && (
        <div className="statAction">
          <button className="linkBtn" onClick={onClick}>
            View details
          </button>
        </div>
      )}
    </Card>
  );
}

/* ===============================
   SectionHeader
   =============================== */
export function SectionHeader({ title, subtitle, actions }) {
  return (
    <div className="sectionHeader">
      <div>
        <div className="sectionTitle">{title}</div>
        {subtitle && <div className="sectionSubtitle">{subtitle}</div>}
      </div>
      {actions && <div className="sectionActions">{actions}</div>}
    </div>
  );
}

/* ===============================
   EmptyState
   =============================== */
export function EmptyState({ title, description, action }) {
  return (
    <Card pad className="emptyState">
      <div className="emptyTitle">{title}</div>
      <div className="emptyDesc">{description}</div>
      {action && <div style={{ marginTop: 10 }}>{action}</div>}
    </Card>
  );
}
