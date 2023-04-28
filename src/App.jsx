import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { plusN, minusN } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  const counter = useSelector((state) => {
    return state.counter;
  });

  // useEffect(()=>{
  //   console.log("number -> "+ number)
  // },[number])

  const dispatch = useDispatch();
  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input 
        type="number"
        value={number}
        onChange={(event)=>{
          const { value } = event.target
          setNumber(+value)
        }}/>
      </div>
      <button
        onClick={() => {
          // dispatch(plusOne());
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
