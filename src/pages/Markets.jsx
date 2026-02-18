// src/pages/Markets.jsx
import React from "react";
import { marketIndexes } from "../mockData";
import { SectionHeader, Card, Badge } from "../ui";
import Sparkline from "../components/Sparkline";

function makeMiniSeries(base) {
  const arr = [];
  let v = base;
  for (let i = 0; i < 24; i++) {
    v += (Math.random() - 0.5) * 6;
    arr.push(Number(v.toFixed(2)));
  }
  return arr;
}

export default function Markets({ toast }) {
  return (
    <div className="pageContent">
      <SectionHeader
        title="Operational Indexes"
        subtitle="Aggregated performance indicators across departments and systems."
      />

      <div className="grid3">
        {marketIndexes.map((m) => {
          const up = m.change >= 0;
          return (
            <Card key={m.symbol}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div className="sectionTitle">{m.symbol}</div>
                  <div className="sectionSubtitle">
                    Composite Operational Index
                  </div>
                </div>
                <Badge tone={up ? "good" : "warn"}>
                  {up ? "+" : ""}
                  {m.change.toFixed(2)}%
                </Badge>
              </div>

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  marginTop: 8,
                }}
              >
                {m.value.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>

              <div style={{ marginTop: 10 }}>
                <Sparkline
                  data={makeMiniSeries(m.value)}
                  color={up ? "var(--a3)" : "rgba(248,113,113,.9)"}
                />
              </div>

              <div style={{ marginTop: 10 }}>
                <button
                  className="linkBtn"
                  onClick={() =>
                    toast(`Drilling down into ${m.symbol} analytics (demo).`)
                  }
                >
                  View detailed analytics →
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
