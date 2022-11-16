import React from "react";
import { saveAs } from "file-saver";

function ExportFunctionality({ JSONToViewString, setLoading }) {
  return (
    <div>
      {/* <a
        href={
          "data:application/json;charset=utf-8," +
          encodeURIComponent(JSON.stringify(JSONToView))
        }
        download={"data.json"}
      >
        Export JSON
      </a> */}
      <button
        onClick={async () => {
          console.log(JSONToViewString);
          try {
            await setLoading(true);
            let file = new Blob([JSONToViewString], {
              type: "application/json",
            });
            await saveAs(file, "data.json");
          } catch (err) {
          } finally {
            setLoading(false);
          }
        }}
      >
        Export JSON
      </button>
    </div>
  );
}

export default ExportFunctionality;
