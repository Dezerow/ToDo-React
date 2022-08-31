import React, { Component } from "react";
import Edit from "./components/Edit";
import TableComplete from "./components/TableComplete";

class App extends Component {
  state = {
    table: [
      { id: 0, content: "Treść zadania 1", date: "", active: true },
      { id: 1, content: "Treść zadania 2", date: "", active: true },
      { id: 2, content: "Treść zadania 3", date: "", active: true },
      { id: 3, content: "Treść zadania 4", date: "", active: true },
      { id: 4, content: "Treść zadania 5", date: "", active: true },
    ],
    text: "",
    counter: 5,
    edit: false,
    editText: "",
  };

  handleClickDelete = (props) => {
    let tableCopy = [...this.state.table];
    tableCopy = tableCopy.filter((index) => index.id !== props);
    this.setState({
      table: tableCopy,
    });
  };

  handleInput = (e) => {
    this.setState({ text: e.target.value });
  };

  handleClickAddition = () => {
    const newElement = {
      id: this.state.counter,
      content: this.state.text,
      active: true,
      date: "",
    };

    console.log(this.state.text);

    this.setState({
      counter: this.state.counter + 1,
    });

    this.setState((prevState) => ({
      table: [...prevState.table, newElement],
    }));
  };

  handleClickEditShow = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  handleClickEdit = (props) => {
    const tableCopy = [...this.state.table];
    tableCopy.forEach((item) => {
      if (item.id === props) {
        item.active = !item.active;
      }
    });

    this.setState({
      table: tableCopy,
    });
  };

  render() {
    const {
      handleInput,
      handleClickAddition,
      handleClickDelete,
      handleClickEdit,
    } = this;

    return (
      <React.Fragment>
        <div>
          <input onChange={handleInput} value={this.state.text} />
          <button onClick={handleClickAddition}>Dodaj zadanie</button>
        </div>
        <span>
          <TableComplete
            delete={handleClickDelete}
            changeStatus={handleClickEdit}
            table={this.state.table}
          />
        </span>
      </React.Fragment>
    );
  }
}

export default App;
