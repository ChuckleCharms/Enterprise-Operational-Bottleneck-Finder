// src/components/LineChart.jsx
import React, { useMemo } from "react";

function buildPath(data, width, height, padding = 16) {
  if (!data || !data.length) return "";

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const stepX = (width - padding * 2) / (data.length - 1);

  const points = data.map((v, i) => {
    const x = padding + i * stepX;
    const y = height - padding - ((v - min) / range) * (height - padding * 2);
    return { x, y };
  });

  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
}

export default function LineChart({
  data = [],
  height = 180,
  width = 1000,
  color = "var(--a1)",
  fill = true,
}) {
  const viewWidth = width;
  const viewHeight = height;

  const path = useMemo(
    () => buildPath(data, viewWidth, viewHeight),
    [data, viewWidth, viewHeight]
  );

  const areaPath = useMemo(() => {
    if (!data || !data.length) return "";
    const basePath = buildPath(data, viewWidth, viewHeight);
    const lastX = viewWidth - 16; // approximate padding
    return `${basePath} L ${lastX} ${viewHeight - 16} L 16 ${
      viewHeight - 16
    } Z`;
  }, [data, viewWidth, viewHeight]);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        width="100%"
        height={height}
      >
        {fill && <path d={areaPath} fill={color} opacity={0.15} />}
        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
