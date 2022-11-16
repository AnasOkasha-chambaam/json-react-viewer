import React from "react";
import ArrayViewer from "./arrayviewer";
import ObjectViewer from "./objectviewer";

function DataToShow({
  JSONToView,
  currentLayer,
  previousLayers,
  setDataOfALayer,
}) {
  if (Array.isArray(JSONToView) && JSONToView.length > 0) {
    return (
      <ArrayViewer
        arrayToView={JSONToView}
        currentLayer={currentLayer}
        previousLayers={previousLayers}
        setDataOfALayer={setDataOfALayer}
      />
    );
  }
  if (Array.isArray(JSONToView) && JSONToView.length === 0) {
    return (
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    );
  }
  if (!Array.isArray(JSONToView) && typeof JSONToView === "object") {
    return (
      <ObjectViewer
        objectToView={JSONToView}
        currentLayer={currentLayer}
        previousLayers={previousLayers}
        setDataOfALayer={setDataOfALayer}
      />
    );
  }
}

export default DataToShow;
