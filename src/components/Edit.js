import React from "react";

const Edit = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.click}>Zatwierdź zmianę</button>
    </React.Fragment>
  );
};

export default Edit;
