import React from "react";

function ObjectViewer({ objectToView }) {
  console.log("from object viewer", objectToView);
  return (
    <tbody>
      {Object.keys(objectToView).map((objectKey) => {
        return (
          <tr key={objectKey}>
            <td>{objectKey}</td>
            <td>{objectToView[objectKey]}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default ObjectViewer;
