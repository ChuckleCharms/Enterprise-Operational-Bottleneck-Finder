// src/pages/Monitoring.jsx
import React from "react";
import { alerts } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";
import Table from "../components/Table";

export default function Monitoring({ toast }) {
  const columns = [
    { key: "title", label: "Alert" },
    {
      key: "severity",
      label: "Severity",
      render: (val) => (
        <Badge
          tone={
            val === "Critical"
              ? "warn"
              : val === "High"
              ? "warn"
              : val === "Medium"
              ? "info"
              : "neutral"
          }
        >
          {val}
        </Badge>
      ),
    },
    { key: "createdAt", label: "Created At" },
    {
      key: "status",
      label: "Status",
      render: (val) => (
        <Badge
          tone={
            val === "Resolved"
              ? "good"
              : val === "Acknowledged"
              ? "info"
              : "warn"
          }
        >
          {val}
        </Badge>
      ),
    },
  ];

  return (
    <div className="pageContent">
      <SectionHeader
        title="Live Monitoring"
        subtitle="Real-time alerts, constraint triggers, and SLA risk notifications."
        actions={
          <Button
            variant="primary"
            onClick={() => toast("Alert rules editor opened (demo).")}
          >
            Manage Alert Rules
          </Button>
        }
      />

      <Card>
        <div
          style={{
            fontSize: 14,
            color: "rgba(234,242,255,.75)",
          }}
        >
          Alerts are automatically generated when thresholds are breached,
          bottlenecks intensify, or SLA risk crosses configured limits.
        </div>
      </Card>

      <div style={{ marginTop: 14 }}>
        <Table
          columns={columns}
          data={alerts}
          onRowClick={(row) => toast(`Opening alert "${row.title}" (demo).`)}
        />
      </div>
    </div>
  );
}
