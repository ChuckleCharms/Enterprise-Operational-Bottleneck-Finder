// src/pages/Agents.jsx
import React from "react";
import { agents } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";

export default function Agents({ toast }) {
  return (
    <div className="pageContent">
      <SectionHeader
        title="Autonomous Agents"
        subtitle="AI agents actively monitoring workflows and executing constraint mitigation actions."
        actions={
          <Button
            variant="primary"
            onClick={() => toast("New agent deployment wizard opened (demo).")}
          >
            Deploy Agent
          </Button>
        }
      />

      <div className="grid3">
        {agents.map((a) => (
          <Card key={a.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {a.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(234,242,255,.70)",
                    marginTop: 4,
                  }}
                >
                  Scope: {a.scope}
                </div>
              </div>

              <Badge
                tone={
                  a.status === "Online"
                    ? "good"
                    : a.status === "Idle"
                    ? "info"
                    : "neutral"
                }
              >
                {a.status}
              </Badge>
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 13.5,
                color: "rgba(234,242,255,.85)",
              }}
            >
              Actions (24h):{" "}
              <span className="mono">{a.actions24h.toLocaleString()}</span>
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
                  toast(`Viewing activity log for ${a.name} (demo).`)
                }
              >
                View Log
              </Button>

              <Button
                variant="ghost"
                onClick={() => toast(`${a.name} configuration opened (demo).`)}
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
