// src/pages/Pipelines.jsx
import React from "react";
import { pipelines } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";

export default function Pipelines({ toast }) {
  return (
    <div className="pageContent">
      <SectionHeader
        title="Data Pipelines"
        subtitle="Live ingestion and processing pipelines powering operational analytics."
        actions={
          <Button
            variant="primary"
            onClick={() =>
              toast("New pipeline configuration wizard opened (demo).")
            }
          >
            Add Pipeline
          </Button>
        }
      />

      <div className="grid3">
        {pipelines.map((p) => (
          <Card key={p.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(234,242,255,.70)",
                    marginTop: 4,
                  }}
                >
                  24h Events: {p.events24h.toLocaleString()}
                </div>
              </div>

              <Badge
                tone={
                  p.status === "Healthy"
                    ? "good"
                    : p.status === "At Risk"
                    ? "warn"
                    : "neutral"
                }
              >
                {p.status}
              </Badge>
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 13.5,
                color: "rgba(234,242,255,.85)",
              }}
            >
              Average Latency: <span className="mono">{p.latency}</span>
            </div>

            <div
              style={{
                marginTop: 12,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="ghost"
                onClick={() => toast(`Viewing metrics for ${p.name} (demo).`)}
              >
                View Metrics
              </Button>

              <Button
                variant="ghost"
                onClick={() => toast(`Opening config for ${p.name} (demo).`)}
              >
                Configure
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
