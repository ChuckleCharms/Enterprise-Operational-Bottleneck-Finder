// src/pages/Backtest.jsx
import React, { useState } from "react";
import { backtestSeries } from "../mockData";
import { SectionHeader, Card, Button, Select, Input, Badge } from "../ui";
import LineChart from "../components/LineChart";

export default function Backtest({ toast }) {
  const [strategy, setStrategy] = useState("WIP Cap Enforcement");
  const [period, setPeriod] = useState("Last 90 Days");
  const [capital, setCapital] = useState("100000");

  const runBacktest = () => {
    toast(
      `Backtest started for "${strategy}" over ${period} (simulation only).`
    );
  };

  return (
    <div className="pageContent">
      <SectionHeader
        title="Backtest Simulation"
        subtitle="Evaluate operational strategies against historical workflow performance."
        actions={
          <Button variant="primary" onClick={runBacktest}>
            Run Backtest
          </Button>
        }
      />

      <div className="grid2">
        <Card>
          <div className="sectionTitle">Configuration</div>
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div className="field">
              <div className="label">Strategy</div>
              <Select
                value={strategy}
                onChange={setStrategy}
                options={[
                  "WIP Cap Enforcement",
                  "Dynamic Reassignment",
                  "SLA Escalation Model",
                ]}
              />
            </div>

            <div className="field">
              <div className="label">Period</div>
              <Select
                value={period}
                onChange={setPeriod}
                options={["Last 30 Days", "Last 90 Days", "Last 180 Days"]}
              />
            </div>

            <div className="field">
              <div className="label">Simulated Budget Impact ($)</div>
              <Input
                value={capital}
                onChange={setCapital}
                placeholder="100000"
              />
            </div>

            <Badge tone="info">Historical data is simulated for demo.</Badge>
          </div>
        </Card>

        <Card>
          <div className="sectionTitle">Performance Projection</div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(234,242,255,.75)",
              marginTop: 6,
            }}
          >
            Expected throughput improvement and cycle time reduction over
            selected period.
          </div>

          <div style={{ marginTop: 12 }}>
            <LineChart data={backtestSeries} color="var(--a3)" height={220} />
          </div>

          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Badge tone="good">+8.4% Throughput</Badge>
            <Badge tone="good">-5.1% Cycle Time</Badge>
            <Badge tone="info">ROI Projection: 2.8x</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
