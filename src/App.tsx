import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(15);
  const [score, setScore] = useState(0);

  return <Header stage={stage} time={time} score={score} />;
}

export default App;
