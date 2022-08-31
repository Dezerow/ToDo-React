import React from "react";

const TableComplete = (props) => {
  const active = props.table.filter((item) => item.active);
  const inactive = props.table.filter((item) => !item.active);

  const activeMap = active.map((item) => (
    <ul key={item.id}>
      <li>Zadanie numer: {item.id}</li>
      <span>{item.content}</span>
      <br />
      <button onClick={props.delete.bind(this, item.id)}>Usuń zadanie</button>
      <button onClick={props.changeStatus.bind(this, item.id)}>
        {item.active ? "Wykonane" : "Niewykonane"}
      </button>
    </ul>
  ));

  const inActiveMap = inactive.map((item) => (
    <ul key={item.id}>
      <li>Zadanie numer: {item.id}</li>
      <span>{item.content}</span>
      <br />
      <button onClick={props.delete.bind(this, item.id)}>Usuń zadanie</button>
      <button onClick={props.changeStatus.bind(this, item.id)}>
        {item.active ? "Wykonane" : "Niewykonane"}
      </button>
    </ul>
  ));

  return (
    <div>
      <div>Zadania do wykonania</div>
      {activeMap}
      <div>Wykonane zadania</div>
      {inActiveMap}
    </div>
  );
};

export default TableComplete;
