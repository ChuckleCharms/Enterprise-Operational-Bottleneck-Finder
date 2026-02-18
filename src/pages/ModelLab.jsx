// src/pages/ModelLab.jsx
import React from "react";
import { models } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";

export default function ModelLab({ toast }) {
  return (
    <div className="pageContent">
      <SectionHeader
        title="Model Lab"
        subtitle="Manage, evaluate, and deploy AI models used for constraint detection and risk forecasting."
        actions={
          <Button
            variant="primary"
            onClick={() => toast("New model training workflow opened (demo).")}
          >
            Train New Model
          </Button>
        }
      />

      <div className="grid3">
        {models.map((m) => (
          <Card key={m.id}>
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
                  {m.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(234,242,255,.70)",
                    marginTop: 4,
                  }}
                >
                  Version {m.version}
                </div>
              </div>

              <Badge
                tone={
                  m.status === "Production"
                    ? "good"
                    : m.status === "Staging"
                    ? "info"
                    : "neutral"
                }
              >
                {m.status}
              </Badge>
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 13.5,
                color: "rgba(234,242,255,.85)",
              }}
            >
              Accuracy: <span className="mono">{m.accuracy}</span>
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
                onClick={() =>
                  toast(`Viewing evaluation report for ${m.name} (demo).`)
                }
              >
                Evaluate
              </Button>

              <Button
                variant="ghost"
                onClick={() =>
                  toast(`Deploying ${m.name} to production (simulation).`)
                }
              >
                Deploy
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
