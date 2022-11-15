import React, { useEffect } from "react";
import DataToShow from "./data-to-show/datatoshow";
function JSONViewer({ JSONToView, loading, setLoading }) {
  useEffect(() => {
    if (setLoading) setLoading(false);
  }, [JSONToView]);
  if (!loading) {
    if(JSONToView === null||JSONToView===undefined){
      return <>{JSON.stringify(JSONToView)}</>
    }
    if (typeof JSONToView === "boolean") {
      return <>{JSON.stringify(JSONToView)}</>;
    }
    if (typeof JSONToView !== "object") {
      // not object && not array
      return <>{JSONToView}</>;
    }
    if (typeof JSONToView === "object" && !Array.isArray(JSONToView)) {
      return (
        <table>
          <DataToShow JSONToView={JSONToView} />
        </table>
      );
    }
    return (
      <table border={2} bordercolor={"black"}>
        <DataToShow JSONToView={JSONToView} />
      </table>
    );
  }
  //   return "Loading";
}

export default JSONViewer;
