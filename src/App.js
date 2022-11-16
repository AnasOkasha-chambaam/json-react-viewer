import React, { useState, useEffect } from "react";
import LinkToGetJSON from "./components/link_to_get_json/linktogetjson";
import JSONViewer from "./components/json_viewer/jsonviewer";
import "./app.css";
import ExportFunctionality from "./components/exportfunctionality/exportfunctionality";

function App() {
  let [loading, setLoading] = useState(false);
  let [linkToGetJSON, setLinkToGetJSON] = useState(""); // This is the link to fetch
  let [JSONToView, setJSONToView] = useState(
    JSON.parse(JSON.stringify({ one: 1 }, null, 2))
  ); // this is the json response to view
  useEffect(() => {
    setLoading(true);
    // This is where the fetch process are going to work
    fetch(linkToGetJSON)
      .then((response) => response.json())
      .then((data) => {
        setJSONToView(data);
      })
      .catch((err) => {
        // console.log(err);
        console.log("Sorry, This Link Doesn't Return Json Type!");
        setLoading(false);
      });
  }, [linkToGetJSON]);
  const submitNewLink = (newLink) => {
    // Add the new link - maybe we make some validation
    if (newLink === linkToGetJSON) setLoading(false);
    setLinkToGetJSON(newLink);
  };
  let setDataOfALayer = (aLayer, newValue) => {
    // Layers will be like '1,any,99'
    let layersArray = aLayer ? aLayer.split(",") : "".split(","),
      mainData = JSON.parse(JSON.stringify(JSONToView, null, 2)),
      currentVariable = mainData;
    layersArray.forEach((singleLayer, index, arr) => {
      if (newValue !== undefined && index === arr.length - 1) {
        try {
          if (singleLayer === "") {
            mainData = JSON.parse(newValue);
          } else {
            currentVariable[singleLayer] = JSON.parse(newValue);
          }
        } catch (err) {
          alert("Please, Enter Json data");
        }
      }
      if (singleLayer && singleLayer.length > 0) {
        currentVariable = currentVariable[singleLayer];
      }
    });
    // console.log(mainData, aLayer, JSON.parse(newValue));
    setJSONToView(mainData);

    return currentVariable;
  };
  return (
    <div className="container">
      <LinkToGetJSON submitNewLink={submitNewLink} setLoading={setLoading} />
      <ExportFunctionality
        JSONToViewString={JSON.stringify(JSONToView, null, 2)}
        setLoading={setLoading}
      />
      <JSONViewer
        JSONToView={JSONToView}
        loading={loading}
        setLoading={setLoading}
        currentLayer={""}
        setDataOfALayer={setDataOfALayer}
      />
    </div>
  );
}

export default App;
