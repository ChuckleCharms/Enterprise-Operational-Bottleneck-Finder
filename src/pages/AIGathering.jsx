// src/pages/AIGathering.jsx
import React from "react";
import { aiSignals } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";

export default function AIGathering({ toast }) {
  return (
    <div className="pageContent">
      <SectionHeader
        title="AI Signal Gathering"
        subtitle="Model-generated constraint insights and predictive signals across workflows."
        actions={
          <Button
            variant="primary"
            onClick={() => toast("AI signal refresh triggered (simulation).")}
          >
            Refresh Signals
          </Button>
        }
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {aiSignals.map((sig) => (
          <Card key={sig.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {sig.signal}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(234,242,255,.70)",
                    marginTop: 4,
                  }}
                >
                  Model: {sig.model}
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <Badge tone="info">Confidence {sig.confidence}</Badge>
                <div style={{ marginTop: 6 }}>
                  <Badge
                    tone={
                      sig.status === "Actioned"
                        ? "good"
                        : sig.status === "Acknowledged"
                        ? "info"
                        : "neutral"
                    }
                  >
                    {sig.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <Button
                variant="ghost"
                onClick={() =>
                  toast(
                    `Opening AI signal workflow for "${sig.signal}" (demo).`
                  )
                }
              >
                Review & Act
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
