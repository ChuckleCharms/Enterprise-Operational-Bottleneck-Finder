// src/pages/NewsSentiment.jsx
import React, { useState } from "react";
import { newsItems } from "../mockData";
import { SectionHeader, Card, Badge, Button, Select } from "../ui";

export default function NewsSentiment({ toast }) {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? newsItems
      : newsItems.filter((n) => n.sentiment === filter);

  return (
    <div className="pageContent">
      <SectionHeader
        title="News & Sentiment"
        subtitle="AI-scored internal and external signals impacting operational performance."
        actions={
          <div style={{ minWidth: 180 }}>
            <Select
              value={filter}
              onChange={setFilter}
              options={["All", "Positive", "Neutral", "Negative"]}
            />
          </div>
        }
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {filtered.map((item) => (
          <Card key={item.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(234,242,255,.70)",
                    marginTop: 4,
                  }}
                >
                  Source: {item.source}
                </div>
              </div>

              <Badge
                tone={
                  item.sentiment === "Positive"
                    ? "good"
                    : item.sentiment === "Negative"
                    ? "warn"
                    : "neutral"
                }
              >
                {item.sentiment}
              </Badge>
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 13.5,
                color: "rgba(234,242,255,.85)",
                lineHeight: 1.5,
              }}
            >
              {item.summary}
            </div>

            <div style={{ marginTop: 10 }}>
              <Button
                variant="ghost"
                onClick={() =>
                  toast(`Opening detailed analysis for "${item.title}" (demo).`)
                }
              >
                View Analysis
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
