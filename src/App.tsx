import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);

  const handleSuccess = () => {
    // handleClick으로 바꾸고, if() idx값 정답색깔 아닐경우.. 하면어떨까..?
    setStage(stage + 1);
    setScore(stage ** 3 * time);
    setTime(15);
  };

  return (
    <>
      <Header stage={stage} time={time} score={score} />
      <Board stage={stage} onClick={handleSuccess} />
    </>
  );
}

export default App;
