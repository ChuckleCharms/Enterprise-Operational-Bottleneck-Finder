// src/pages/Orders.jsx
import React from "react";
import { ordersRows } from "../mockData";
import { SectionHeader, Card, Badge, Button } from "../ui";
import Table from "../components/Table";

export default function Orders({ toast }) {
  const columns = [
    { key: "id", label: "Order ID" },
    { key: "type", label: "Action Type" },
    { key: "target", label: "Target" },
    {
      key: "status",
      label: "Status",
      render: (val) => (
        <Badge
          tone={
            val === "Completed"
              ? "good"
              : val === "Running"
              ? "info"
              : val === "Failed"
              ? "warn"
              : "neutral"
          }
        >
          {val}
        </Badge>
      ),
    },
    { key: "createdAt", label: "Created At" },
  ];

  return (
    <div className="pageContent">
      <SectionHeader
        title="Operational Orders"
        subtitle="Executed and queued operational adjustments triggered by users or AI agents."
        actions={
          <Button
            variant="primary"
            onClick={() =>
              toast("New operational order workflow opened (demo).")
            }
          >
            Create Order
          </Button>
        }
      />

      <Card>
        <div
          style={{
            fontSize: 14,
            color: "rgba(234,242,255,.75)",
          }}
        >
          Orders represent capacity reallocations, SLA adjustments, or
          intervention actions triggered to relieve constraints and protect
          throughput.
        </div>
      </Card>

      <div style={{ marginTop: 14 }}>
        <Table
          columns={columns}
          data={ordersRows}
          onRowClick={(row) =>
            toast(`Opening order ${row.id} details (demo only).`)
          }
        />
      </div>
    </div>
  );
}
