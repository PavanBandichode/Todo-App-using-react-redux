import { createStore } from "redux";

function reducer(state = [], action) {
  switch (action.type) {
    case "addTodo":
      return state.concat({ todo: action.todo, isDone: false });
    case "toggle":
      return state.filter((x, i) => {
        if (i === Number(action.id)) {
          x.isDone = !x.isDone;
        }
        return x;
      });
    case "removeTodo":
      return state.filter((x, i) => i !== Number(action.id));

    default:
      return state;
  }
}
let store = createStore(reducer);
export default store;
