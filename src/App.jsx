import CopyInput from "./components/CopyInput";
import FetchDataEffect from "./components/FetchDataEffect";
import Switcher from "./components/Switcher";
import UpdateUser from "./components/UpdateUser";
import { UserProvider } from "./components/UserContext";
import { UserProfile } from "./components/UserProfile";
import Reducer from "./components/Reducer";

const App = () => {
  return (
    <>
      {/* <CopyInput></CopyInput>
      <Switcher></Switcher>
      <FetchDataEffect></FetchDataEffect> */}
      <UserProvider>
        <UserProfile></UserProfile>
        <UpdateUser></UpdateUser>
      </UserProvider>
      <Reducer></Reducer>
    </>
  );
};

export default App;
