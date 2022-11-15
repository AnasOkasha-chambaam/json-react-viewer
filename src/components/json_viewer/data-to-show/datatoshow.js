import React from "react";
import ArrayViewer from "./arrayviewer";
import ObjectViewer from "./objectviewer";

function DataToShow({ JSONToView }) {
  if (Array.isArray(JSONToView) && JSONToView.length > 0) {
    return <ArrayViewer arrayToView={JSONToView} />;
  }
  if (!Array.isArray(JSONToView) && typeof JSONToView === "object") {
    return <ObjectViewer objectToView={JSONToView} />;
  }
}

export default DataToShow;
