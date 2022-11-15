import React from "react";
import JSONViewer from "../jsonviewer";

function ObjectViewer({ objectToView, currentLayer, previousLayers }) {
  return (
    <tbody>
      {Object.keys(objectToView).map((objectKey) => {
        return (
          <tr key={objectKey}>
            <td>{objectKey}</td>
            <td>
              <JSONViewer
                JSONToView={objectToView[objectKey]}
                currentLayer={objectKey}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default ObjectViewer;
