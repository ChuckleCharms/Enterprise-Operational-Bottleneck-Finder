// src/pages/Overview.jsx
import React from "react";
import {
  overviewKpis,
  overviewThroughputSeries,
  overviewCycleTimeSeries,
} from "../mockData";
import { StatCard, SectionHeader, Card, Button } from "../ui";
import LineChart from "../components/LineChart";

export default function Overview({ navigate, toast }) {
  return (
    <div className="pageContent">
      <SectionHeader
        title="Executive Overview"
        subtitle="High-level operational health, constraint visibility, and performance trends."
        actions={
          <Button
            variant="primary"
            onClick={() => {
              toast("Simulated constraint scan started.");
              navigate("Monitoring");
            }}
          >
            Run Constraint Scan
          </Button>
        }
      />

      <div className="grid4">
        {overviewKpis.map((kpi) => (
          <StatCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            delta={kpi.delta}
            tone={kpi.tone}
            onClick={() => toast(`Opening detailed view for: ${kpi.label}`)}
          />
        ))}
      </div>

      <div className="grid2" style={{ marginTop: 14 }}>
        <Card>
          <div className="sectionTitle">Throughput Trend</div>
          <div className="sectionSubtitle">
            Daily processed units (rolling 40-day window)
          </div>
          <div style={{ marginTop: 10 }}>
            <LineChart
              data={overviewThroughputSeries}
              color="var(--a1)"
              height={200}
            />
          </div>
        </Card>

        <Card>
          <div className="sectionTitle">Cycle Time (Hours)</div>
          <div className="sectionSubtitle">
            Median cycle time across primary workflows
          </div>
          <div style={{ marginTop: 10 }}>
            <LineChart
              data={overviewCycleTimeSeries}
              color="var(--a2)"
              height={200}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
