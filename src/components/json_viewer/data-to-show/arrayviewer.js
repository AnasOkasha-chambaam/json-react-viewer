import React from "react";
import { checkIfArrayItemsAreAllObjects } from "../../helpers/helpers";
import JSONViewer from "../jsonviewer";

function ArrayViewer({ arrayToView, currentLayer, setDataOfALayer }) {
  if (checkIfArrayItemsAreAllObjects(arrayToView)[0]) {
    // Render Keys
    return (
      <>
        <thead>
          <tr>
            <td> </td>
            {checkIfArrayItemsAreAllObjects(arrayToView)[1].map((oneKey) => {
              return <td key={oneKey}>{oneKey.trim()}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {arrayToView.map((item, index) => {
            return (
              <tr key={index + "_" + item[Object.keys(item)[0]]}>
                <td>{index}</td>
                {checkIfArrayItemsAreAllObjects(arrayToView)[1].map(
                  (oneKey) => {
                    return (
                      <td key={index + oneKey}>
                        <JSONViewer
                          JSONToView={item[oneKey]}
                          currentLayer={[currentLayer, index + "", oneKey]
                            .filter((a) => a)
                            .join(",")}
                          setDataOfALayer={setDataOfALayer}
                        />
                      </td>
                    );
                  }
                )}
              </tr>
            );
          })}
        </tbody>
      </>
    );
  } else {
    return arrayToView.map((row, index) => {
      return (
        <tbody key={index + "_key"}>
          <tr style={{ border: "1px solid black", display: "block" }}>
            <td>{index}</td>
            <td style={{ textAlign: "left" }}>
              {
                <JSONViewer
                  JSONToView={row}
                  currentLayer={[currentLayer, index + ""]
                    .filter((a) => a)
                    .join(",")}
                  previousLayers={currentLayer}
                  setDataOfALayer={setDataOfALayer}
                />
              }
            </td>
          </tr>
        </tbody>
      );
    });
  }
}

export default ArrayViewer;
