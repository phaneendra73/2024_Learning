import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Understanding context API</h1>
    </UserContextProvider>
  );
}

export default App;
