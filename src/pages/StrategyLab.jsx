// src/pages/StrategyLab.jsx
import React, { useState } from "react";
import { strategies } from "../mockData";
import { SectionHeader, Card, Badge, Button, Textarea, Input } from "../ui";

export default function StrategyLab({ toast }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="pageContent">
      <SectionHeader
        title="Strategy Lab"
        subtitle="Design and manage automated strategies for bottleneck mitigation and SLA protection."
      />

      <div className="grid2">
        <Card>
          <div className="sectionTitle">Existing Strategies</div>
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {strategies.map((s) => (
              <Card key={s.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {s.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "rgba(234,242,255,.75)",
                        marginTop: 4,
                      }}
                    >
                      {s.description}
                    </div>
                  </div>
                  <Badge tone={s.status === "Active" ? "good" : "neutral"}>
                    {s.status}
                  </Badge>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Button
                    variant="ghost"
                    onClick={() =>
                      toast(`Opening strategy ${s.name} (demo mode).`)
                    }
                  >
                    Edit
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <Card>
          <div className="sectionTitle">Create New Strategy</div>
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div className="field">
              <div className="label">Strategy Name</div>
              <Input
                value={name}
                onChange={setName}
                placeholder="e.g., Dynamic Capacity Rebalance"
              />
            </div>

            <div className="field">
              <div className="label">Description</div>
              <Textarea
                value={desc}
                onChange={setDesc}
                placeholder="Describe logic, triggers, thresholds, and expected impact."
              />
            </div>

            <Button
              variant="primary"
              disabled={!name || !desc}
              onClick={() => {
                toast(`Strategy "${name}" created (simulation only).`);
                setName("");
                setDesc("");
              }}
            >
              Save Strategy
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
