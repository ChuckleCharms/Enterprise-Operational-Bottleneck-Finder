// src/pages/Screener.jsx
import React, { useMemo, useState } from "react";
import { screenerRows } from "../mockData";
import { SectionHeader, Card, Input, Select, Button, Badge } from "../ui";
import Table from "../components/Table";

export default function Screener({ toast }) {
  const [dept, setDept] = useState("All");
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("");

  const departments = [
    "All",
    ...Array.from(new Set(screenerRows.map((r) => r.department))),
  ];
  const statuses = [
    "All",
    ...Array.from(new Set(screenerRows.map((r) => r.status))),
  ];

  const filtered = useMemo(() => {
    return screenerRows.filter((r) => {
      const matchDept = dept === "All" || r.department === dept;
      const matchStatus = status === "All" || r.status === status;
      const matchQuery =
        !query || r.process.toLowerCase().includes(query.toLowerCase());
      return matchDept && matchStatus && matchQuery;
    });
  }, [dept, status, query]);

  const columns = [
    { key: "process", label: "Process" },
    { key: "department", label: "Department" },
    { key: "slaRisk", label: "SLA Risk" },
    { key: "wip", label: "WIP" },
    {
      key: "status",
      label: "Status",
      render: (val) => (
        <Badge
          tone={
            val === "Healthy"
              ? "good"
              : val === "At Risk"
              ? "warn"
              : val === "Delayed"
              ? "warn"
              : "neutral"
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
        title="Process Screener"
        subtitle="Filter and identify high-risk or overloaded operational processes."
      />

      <Card>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "end",
          }}
        >
          <div style={{ minWidth: 180 }}>
            <div className="field">
              <div className="label">Department</div>
              <Select value={dept} onChange={setDept} options={departments} />
            </div>
          </div>

          <div style={{ minWidth: 180 }}>
            <div className="field">
              <div className="label">Status</div>
              <Select value={status} onChange={setStatus} options={statuses} />
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 200 }}>
            <div className="field">
              <div className="label">Search Process</div>
              <Input
                value={query}
                onChange={setQuery}
                placeholder="e.g., Process-4"
              />
            </div>
          </div>

          <Button
            variant="primary"
            onClick={() => toast("Screener filters applied (demo).")}
          >
            Apply Filters
          </Button>
        </div>
      </Card>

      <div style={{ marginTop: 14 }}>
        <Table
          columns={columns}
          data={filtered}
          onRowClick={(row) =>
            toast(`Opening deep dive for ${row.process} (demo only).`)
          }
        />
      </div>
    </div>
  );
}
