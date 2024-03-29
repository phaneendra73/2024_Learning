import { Provider } from "react-redux";
import { todoStore } from "./app/store";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={todoStore}>
      <h1>Learn redux tool kit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
