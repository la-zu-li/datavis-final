import React from "react";
import * as vl from "vega-lite-api";
import VegaChart from "./VegaChart.tsx";

const BarChart: React.FC = () => {
  const chart = vl
    .markBar({ tooltip: true })
    .encode(
      vl.x().fieldQ("b"),
      vl.y().fieldN("a"),
      vl.tooltip([vl.fieldQ("b"), vl.fieldN("a")]),
    );

  const data = {
    values: [
      { a: "A", b: 28 },
      { a: "B", b: 55 },
      { a: "C", b: 43 },
      { a: "D", b: 91 },
      { a: "E", b: 81 },
      { a: "F", b: 53 },
      { a: "G", b: 19 },
      { a: "H", b: 87 },
      { a: "I", b: 52 },
    ],
  };

  return <VegaChart vegaLiteObject={chart} data={data} />;
};

export default BarChart;
