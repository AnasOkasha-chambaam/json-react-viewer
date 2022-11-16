import React, { useEffect, useState } from "react";
import EditFunctionality from "../edit_functionality/editfunctionality";
import DataToShow from "./data-to-show/datatoshow";
import loader from "../../loader.svg";
function JSONViewer({
  JSONToView,
  loading,
  setLoading,
  currentLayer,
  previousLayers,
  setDataOfALayer,
}) {
  let lastLayer = currentLayer.split(",");
  lastLayer = lastLayer[lastLayer.length - 1];
  // let numberOfRows = (JSONToView)Object.keys(JSONToView).length;
  let [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (setLoading) setLoading(false);
  }, [JSONToView]);
  if (!loading) {
    if (JSONToView === null || JSONToView === undefined) {
      return (
        <>
          {JSON.stringify(JSONToView)}
          <EditFunctionality
            currentLayer={currentLayer}
            previousLayers={previousLayers}
            JSONToView={JSONToView}
            setDataOfALayer={setDataOfALayer}
          />
        </>
      );
    }
    if (typeof JSONToView === "boolean") {
      return (
        <>
          {JSON.stringify(JSONToView)}
          <EditFunctionality
            currentLayer={currentLayer}
            previousLayers={previousLayers}
            JSONToView={JSONToView}
            setDataOfALayer={setDataOfALayer}
          />
        </>
      );
    }
    if (typeof JSONToView !== "object") {
      // not object && not array
      return (
        <>
          {JSONToView}
          <EditFunctionality
            currentLayer={currentLayer}
            previousLayers={previousLayers}
            JSONToView={JSONToView}
            setDataOfALayer={setDataOfALayer}
          />
        </>
      );
    }
    if (typeof JSONToView === "object") {
      return (
        <>
          <button
            className="show-hide-data-btn"
            onClick={() => {
              setShowContent(!showContent);
            }}
          >
            {`[${showContent ? "-" : "+"}]` +
              (lastLayer ? lastLayer : "Retrived Data") +
              " " +
              (Array.isArray(JSONToView)
                ? `[${Object.keys(JSONToView).length}]`
                : `{${Object.keys(JSONToView).length}}`)}
          </button>
          <table style={{ display: showContent ? "block" : "none" }}>
            <DataToShow
              JSONToView={JSONToView}
              currentLayer={currentLayer}
              previousLayers={previousLayers}
              setDataOfALayer={setDataOfALayer}
            />
          </table>
          <EditFunctionality
            currentLayer={currentLayer}
            previousLayers={previousLayers}
            JSONToView={JSONToView}
            setDataOfALayer={setDataOfALayer}
          />
        </>
      );
    }
  }
  return (
    <>
      <img src={loader} alt="" />
    </>
  );
  //   return "Loading";
}

export default JSONViewer;
