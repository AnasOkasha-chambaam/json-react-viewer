import React from "react";
import ArrayViewer from "./arrayviewer";

function DataToShow({ JSONToView }) {
  if (Array.isArray(JSONToView) && JSONToView.length > 0) {
    return <ArrayViewer arrayToView={JSONToView} />;
  }
}

export default DataToShow;
