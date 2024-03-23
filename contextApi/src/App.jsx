import Login from "./componets/Login";
import Profile from "./componets/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Understanding context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
