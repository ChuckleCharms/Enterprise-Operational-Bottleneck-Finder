// src/pages/Risk.jsx
import React from "react";
import { riskMatrix } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";
import Table from "../components/Table";

export default function Risk({ toast }) {
  const columns = [
    { key: "item", label: "Risk Item" },
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
    { key: "likelihood", label: "Likelihood" },
    { key: "owner", label: "Owner" },
  ];

  return (
    <div className="pageContent">
      <SectionHeader
        title="Risk Matrix"
        subtitle="Identify and prioritize operational risks that may create or worsen bottlenecks."
        actions={
          <Button
            variant="primary"
            onClick={() => toast("New risk entry workflow opened (demo).")}
          >
            Add Risk
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
          Risks are ranked by severity and likelihood, aligned to departments
          and owners responsible for mitigation.
        </div>
      </Card>

      <div style={{ marginTop: 14 }}>
        <Table
          columns={columns}
          data={riskMatrix}
          onRowClick={(row) =>
            toast(`Opening risk detail for "${row.item}" (demo).`)
          }
        />
      </div>
    </div>
  );
}
