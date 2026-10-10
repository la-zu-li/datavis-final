import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import * as vega from "vega";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import * as vl from "vega-lite-api";

// interface VegaLiteOptions {
//   config?: vegaLite.Config;
//   init?: (view: any) => void;
//   view?: any;
// }

// const options: VegaLiteOptions = {
//   config: {
//     // vega-lite default configuration
//   },
//   init: (view: any) => {
//     // initialize tooltip handler
//     view.tooltip(new vegaTooltip.Handler().call);
//     // enable horizontal scrolling for large plots
//     if (view.container()) view.container().style["overflow-x"] = "auto";
//   },
//   view: {
//     // view constructor options
//     loader: vega.loader({
//       baseURL: "https://cdn.jsdelivr.net/npm/vega-datasets@1/",
//     }),
//     renderer: "canvas",
//   },
// };

// vl.register(vega, vegaLite, options);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
