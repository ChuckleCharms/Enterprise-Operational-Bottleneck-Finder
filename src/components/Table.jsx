// src/components/Table.jsx
import React from "react";

export default function Table({
  columns = [],
  data = [],
  rowKey = "id",
  onRowClick,
}) {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,.10)",
        background: "rgba(255,255,255,.04)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: 640,
        }}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  textAlign: "left",
                  fontSize: 12,
                  letterSpacing: ".3px",
                  textTransform: "uppercase",
                  color: "rgba(234,242,255,.65)",
                  padding: "12px 14px",
                  borderBottom: "1px solid rgba(255,255,255,.10)",
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row[rowKey]}
              onClick={() => onRowClick && onRowClick(row)}
              style={{
                cursor: onRowClick ? "pointer" : "default",
              }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{
                    padding: "12px 14px",
                    borderBottom: "1px solid rgba(255,255,255,.06)",
                    fontSize: 13.5,
                  }}
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
