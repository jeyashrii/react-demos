import CopyInput from "./components/ReactPortal/CopyInput";
import FetchDataEffect from "./components/useEffect/FetchDataEffect";
import Switcher from "./components/keys/Switcher";
import UpdateUser from "./components/useContext/UpdateUser";
import { UserProvider } from "./components/useContext/UserContext";
import { UserProfile } from "./components/useContext/UserProfile";
import Reducer from "./components/useReducer/Reducer";
import Counter from "./components/useReducer/Counter";
import UseReference from "./components/useRef/FocusInput";
import Timer from "./components/useRef/Timer";
import FocusInput from "./components/useRef/FocusInput";
import useFetch from "./components/customHook/useFetch";
import ListComponent from "./components/customHook/ListComponent";
import Index from "./components/useId/Index";
import Todo from "./components/todo/Todo";
import Fetch from "./components/practice/Fetch";
import { CountReducer } from "./components/practice/CountReducer";
import StopWatch from "./components/practice/StopWatch";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import OTP from "./components/OTP/Otp";
import AutoComplete from "./components/AutoCompleteSearchBar/AutoComplete";
const App = () => {
  const items = [50, 20, 10, 30, 50, 80, 100];
  return (
    <>
      {/* ------------ keys --------- */}
      {/* <Switcher></Switcher> */}
      {/* ------------reactportal --------*/}
      {/*<CopyInput></CopyInput> */}
      {/*-------- useEffect-------- */}
      {/*<FetchDataEffect></FetchDataEffect>*/}
      {/*-----------useContext-----------*/}
      {/* <UserProvider>
        <UserProfile></UserProfile>
        <UpdateUser></UpdateUser>
      </UserProvider> */}
      {/*-----------------------Use Reducer--------------------------------------*/}
      {/* <Counter></Counter>
      <Reducer></Reducer> */}
      {/* --------------------useReference------------------------- */}
      {/* <FocusInput></FocusInput>*/}
      {/* <Timer></Timer> */}
      {/* ---------------------------Custom Hook--------------------------------------- */}
      {/* <ListComponent></ListComponent> */}
      {/* ----------useId---------------------------------- */}
      {/* <Index></Index> */}
      {/* <Todo /> */}
      {/* <Fetch></Fetch> */}
      {/* <CountReducer></CountReducer> */}
      {/* <StopWatch></StopWatch> */}
      {/* -----------------------------pROGRESS BAR------------------------------ */}
      {/* <ProgressBar progress={50}></ProgressBar>

      {items.map((item) => {
        return <ProgressBar progress={item} key={item}></ProgressBar>;
      })} */}
      {/* -----------------------------------otp------------------------------------ */}
      {/* <OTP></OTP> */}
      {/* ---------------------------AutoCompleteSearchBar----------------------------- */}
      <AutoComplete></AutoComplete>
    </>
  );
};

export default App;
