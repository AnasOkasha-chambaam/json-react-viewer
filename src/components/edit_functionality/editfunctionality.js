import React, { useEffect, useRef, useState } from "react";

function EditFunctionality({ JSONToView, currentLayer, setDataOfALayer }) {
  let [showInput, setShowInput] = useState(false);
  let [toShow, setToShow] = useState(JSON.stringify(JSONToView));
  useEffect(() => {
    setToShow(JSON.stringify(JSONToView));
  }, [JSONToView]);
  let newValue = useRef();
  return (
    <div className="edit-functionality">
      <button
        className="edit-content-btn"
        onClick={() => {
          setShowInput(!showInput);
        }}
      >
        {showInput ? "Hide" : "Edit"}
      </button>
      <form
        className="edit-content-form"
        style={{ display: showInput ? "block" : "none" }}
        onSubmit={(e) => {
          e.preventDefault();
          setDataOfALayer(currentLayer, newValue.current.value);
        }}
      >
        <label>Insert New Value</label>
        <textarea
          name="new-value"
          value={toShow}
          onChange={(e) => {
            setToShow(e.target.value);
          }}
          ref={newValue}
        ></textarea>
        <button type="submit">Edit Value</button>
      </form>
    </div>
  );
}

export default EditFunctionality;
