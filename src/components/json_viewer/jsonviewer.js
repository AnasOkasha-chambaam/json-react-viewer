import React, { useEffect, useState } from "react";
import DataToShow from "./data-to-show/datatoshow";
function JSONViewer({
  JSONToView,
  loading,
  setLoading,
  currentLayer,
  previousLayers,
}) {
  let [showContent, setShowContent] = useState(false);

  // console.log(currentLayer);
  useEffect(() => {
    if (setLoading) setLoading(false);
  }, [JSONToView]);
  if (!loading) {
    if (JSONToView === null || JSONToView === undefined) {
      return <>{JSON.stringify(JSONToView)}</>;
    }
    if (typeof JSONToView === "boolean") {
      return <>{JSON.stringify(JSONToView)}</>;
    }
    if (typeof JSONToView !== "object") {
      // not object && not array
      return <>{JSONToView}</>;
    }
    if (typeof JSONToView === "object") {
      return (
        <>
          <button
            onClick={() => {
              setShowContent(!showContent);
            }}
          >
            {(currentLayer ? currentLayer : "") + " "}
          </button>
          <table style={{ display: showContent ? "block" : "none" }}>
            <DataToShow
              JSONToView={JSONToView}
              currentLayer={currentLayer}
              previousLayers={previousLayers}
            />
          </table>
        </>
      );
    }
  }
  //   return "Loading";
}

export default JSONViewer;
