// src/pages/Portfolio.jsx
import React from "react";
import { portfolioRows } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";
import Table from "../components/Table";

export default function Portfolio({ toast }) {
  const columns = [
    { key: "name", label: "Initiative" },
    { key: "owner", label: "Owner" },
    { key: "impact", label: "Impact" },
    { key: "roi", label: "Projected ROI" },
    {
      key: "status",
      label: "Status",
      render: (val) => (
        <Badge
          tone={
            val === "In Progress"
              ? "info"
              : val === "Planned"
              ? "neutral"
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
        title="Initiative Portfolio"
        subtitle="Operational improvement programs aligned to constraint reduction and ROI."
        actions={
          <Button
            variant="primary"
            onClick={() => toast("New initiative workflow opened (demo).")}
          >
            New Initiative
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
          This portfolio tracks strategic initiatives aimed at relieving
          bottlenecks, reducing SLA risk, and improving throughput across
          departments.
        </div>
      </Card>

      <div style={{ marginTop: 14 }}>
        <Table
          columns={columns}
          data={portfolioRows}
          onRowClick={(row) =>
            toast(`Opening initiative: ${row.name} (demo mode).`)
          }
        />
      </div>
    </div>
  );
}
