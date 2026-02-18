// src/components/Sparkline.jsx
import React, { useMemo } from "react";

function buildSparkPath(data, width, height, padding = 6) {
  if (!data || data.length < 2) return "";

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const stepX = (width - padding * 2) / (data.length - 1);

  return data
    .map((v, i) => {
      const x = padding + i * stepX;
      const y = height - padding - ((v - min) / range) * (height - padding * 2);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

export default function Sparkline({
  data = [],
  height = 40,
  width = 160,
  color = "var(--a1)",
}) {
  const path = useMemo(
    () => buildSparkPath(data, width, height),
    [data, width, height]
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      style={{ display: "block" }}
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
