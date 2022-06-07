import React from "react";
import { connect } from "react-redux";
function App(props) {
  function handleClick(event) {
    if (event.keyCode === 13 && event.target.value) {
      props.dispatch({ type: "addTodo", todo: event.target.value });
      event.target.value = "";
    }
  }
  function handleComplete(event) {
    let { checked, value } = event.target;
    props.dispatch({ type: "toggle", id: value });
  }
  function handleDelete(event) {
    let { id } = event.target;
    console.log(id, "delete");
    props.dispatch({ type: "removeTodo", id: id });
  }
  return (
    <div className="container">
      <h1>Todos😄</h1>
      <input
        type="text"
        placeholder="Enter todo..."
        className="input"
        onKeyUp={handleClick}
      />
      <div>
        <ul>
          {props.state &&
            props.state.map((elem, i) => {
              return (
                <li className="flex justify-content">
                  <div className="flex center">
                    <input type="checkbox" onClick={handleComplete} value={i} />
                    <h2>{elem.todo}</h2>
                  </div>
                  <span id={i} onClick={handleDelete}>
                    ❌
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
function getState(state) {
  return {
    state,
  };
}
export default connect(getState)(App);
