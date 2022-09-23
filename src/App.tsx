import { useState, useEffect, useCallback } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);

  const handleSuccess = useCallback(() => {
    setStage(stage + 1);
    setScore(stage ** 3 * time);
    setTime(15);
  }, [stage]);

  const handleFailure = useCallback(() => {
    setTime((time) => time - 3);
  }, [stage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (time < 0) {
    alert(`GAME OVER!\n스테이지:${stage}, 점수:${score}`);
    setStage(1);
    setTime(15);
    setScore(0);
  }

  return (
    <>
      <Header stage={stage} time={time} score={score} />
      <Board
        stage={stage}
        handleSuccess={handleSuccess}
        handleFailure={handleFailure}
      />
    </>
  );
}

export default App;
