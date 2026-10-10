import React from "react";
import VegaLite from "react-vega-lite";

interface VegaChartProps {
  vegaLiteObject: any;
  data: { values: Object[] };
}

const VegaChart: React.FC<VegaChartProps> = ({ vegaLiteObject, data }) => {
  const vegaLiteSpec = JSON.parse(vegaLiteObject.toString());
  return <VegaLite spec={vegaLiteSpec} data={data} />;
};

export default VegaChart;
