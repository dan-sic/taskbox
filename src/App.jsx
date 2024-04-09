import "./App.css";

import "./index.css";
import store from "./lib/store";

import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import { useAuth } from "./components/use-reducer";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [user, logIn] = useAuth();

  return (
    <>
      {user?.token ? (
        <Provider store={store}>
          <InboxScreen />
        </Provider>
      ) : (
        <LoginScreen onLogIn={logIn} />
      )}
    </>
  );
}

export default App;
