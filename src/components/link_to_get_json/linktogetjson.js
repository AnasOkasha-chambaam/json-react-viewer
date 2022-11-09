import React, { useRef } from "react";

function LinkToGetJSON({ submitNewLink }) {
  let linkInput = useRef();
  return (
    <div>
      <form
        action=""
        method="get"
        onSubmit={(event) => {
          event.preventDefault();
          submitNewLink(linkInput.current ? linkInput.current.value : "");
        }}
      >
        <input
          ref={linkInput}
          type="text"
          name="link-to-get-json"
          placeholder="Put a link to get a JSON from"
          value={"https://api.github.com/users/mralexgray/repos"}
          onChange={() => {}}
        />
        <input type="submit" value="Get JSON" />
      </form>
    </div>
  );
}

export default LinkToGetJSON;
