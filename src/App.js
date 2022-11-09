import React, { useState, useEffect } from "react";
import LinkToGetJSON from "./components/link_to_get_json/linktogetjson";
import JSONViewer from "./components/json_viewer/jsonviewer";
import "./app.css";

function App() {
  let [loading, setLoading] = useState(true);
  let [linkToGetJSON, setLinkToGetJSON] = useState(""); // This is the link to fetch
  let [JSONToView, setJSONToView] = useState(
    JSON.parse(JSON.stringify({ one: 1 }))
  ); // this is the json response to view
  useEffect(() => {
    setLoading(true);
    // This is where the fetch process are going to work
    fetch(linkToGetJSON)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJSONToView(data);
      })
      .catch((err) => {
        // console.log(err);
        console.log("Sorry, This Link Doesn't Return Json Type!");
      });
  }, [linkToGetJSON]);
  const submitNewLink = (newLink) => {
    // Add the new link - maybe we make some validation
    setLinkToGetJSON(newLink);
  };
  return (
    <div className="container">
      <LinkToGetJSON submitNewLink={submitNewLink} />
      <JSONViewer
        JSONToView={JSONToView}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
