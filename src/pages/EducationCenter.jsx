// src/pages/EducationCenter.jsx
import React from "react";
import { educationModules } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";

export default function EducationCenter({ toast }) {
  return (
    <div className="pageContent">
      <SectionHeader
        title="Education Center"
        subtitle="Operational excellence training, constraint theory fundamentals, and simulation best practices."
      />

      <div className="grid3">
        {educationModules.map((m) => (
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
                  {m.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(234,242,255,.70)",
                    marginTop: 4,
                  }}
                >
                  Duration: {m.duration}
                </div>
              </div>

              <Badge tone="info">{m.level}</Badge>
            </div>

            <div style={{ marginTop: 12 }}>
              <Button
                variant="primary"
                onClick={() =>
                  toast(`Launching "${m.title}" module (demo only).`)
                }
              >
                Start Module
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <Card>
          <div className="sectionTitle">Why This Matters</div>
          <div
            style={{
              marginTop: 10,
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(234,242,255,.85)",
            }}
          >
            The Theory of Constraints teaches that every system has at least one
            limiting factor. By identifying and systematically improving that
            constraint, organizations unlock exponential performance gains. This
            console integrates analytics, simulation, and AI to make that
            improvement continuous and measurable.
          </div>
        </Card>
      </div>
    </div>
  );
}
