// src/components/TickerTape.jsx
import React from "react";
import { marketIndexes } from "../mockData";

export default function TickerTape() {
  return (
    <div className="ticker">
      <div className="tickerInner">
        <div className="tickerLabel">Operational Indexes</div>
        <div className="tickerTrack">
          {marketIndexes.map((m) => {
            const up = m.change >= 0;
            return (
              <div key={m.symbol} className="tick">
                <div className="tickSym">{m.symbol}</div>
                <div className="tickVal">
                  {m.value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div className={`tickChg ${up ? "up" : "down"}`}>
                  {up ? "+" : ""}
                  {m.change.toFixed(2)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
