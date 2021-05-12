import "./App.css";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { QuizContext } from "./Helpers/Context";
// ['menu', 'playing', 'finished']


function App() {
  const [gameState, setGameState] = useState("menu");
  //const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          
         
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;