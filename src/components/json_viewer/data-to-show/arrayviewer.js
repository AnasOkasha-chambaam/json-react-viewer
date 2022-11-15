import React from "react";
import { checkIfArrayItemsAreAllObjects } from "../../helpers/helpers";
import JSONViewer from "../jsonviewer";

function ArrayViewer({ arrayToView }) {
  if (checkIfArrayItemsAreAllObjects(arrayToView)[0]) {
    // console.log(arrayToView);
    // Render Keys
    return (
      <>
        <thead>
          <tr>
            {/* <td> </td> */}
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
                        <JSONViewer JSONToView={item[oneKey]} />
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
        <tr
          key={index + "_key"}
          style={{ border: "1px solid black", display: "block" }}
        >
          <td>{index}</td>
          <td style={{ textAlign: "left" }}>
            {<JSONViewer JSONToView={row} />}
          </td>
        </tr>
      );
    });
  }
}

export default ArrayViewer;
