import React, { useRef, useState } from "react";

function LinkToGetJSON({ submitNewLink, setLoading }) {
  let linkInput = useRef();
  let [inputValue, setInputValue] = useState(
    "https://api.github.com/users/mralexgray/repos"
  );
  return (
    <div>
      <form
        action=""
        method="get"
        onSubmit={(event) => {
          event.preventDefault();
          setLoading(true);
          submitNewLink(linkInput.current ? linkInput.current.value : "");
        }}
      >
        <input
          ref={linkInput}
          type="text"
          name="link-to-get-json"
          placeholder="Put a link to get a JSON from"
          value={inputValue}
          onChange={function(e) {
            setInputValue(e.target.value);
          }}
        />
        <input type="submit" value="Get JSON" />
      </form>
    </div>
  );
}

export default LinkToGetJSON;
