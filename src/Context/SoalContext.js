import React, { useState, useEffect, useContext } from "react";

export const SoalContext = React.createContext({
  quizDatas: null,
  nomor: 1,
  gantiNomor: (nomor) => {},
  score: 0,
  setScore: () => {},
  timeOver: Date.now() + 120000,
  answered: 0,
  setAnswered: () => {},
});

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const SoalContextProvider = (props) => {
  const [soal, setSoal] = useState(null);
  const [curNumber, setCurNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [timeOver, _] = useState(Date.now() + 120000);
  const [answered, setAnswered] = useState(0);

  async function fecthSoalHandler() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&type=multiple"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const quizData = [];
    const data = await response.json();

    data.results.forEach((element, index) => {
      const answersData = element.incorrect_answers;
      answersData.push(element.correct_answer);

      quizData.push({
        id: index + 1,
        question: element.question,
        answers: shuffle(answersData),
        correct: element.correct_answer,
      });
    });
    console.log(quizData);
    setSoal(quizData);
  }

  useEffect(() => {
    void fecthSoalHandler();
  }, []);

  return (
    <SoalContext.Provider
      value={{
        quizDatas: soal,
        nomor: curNumber,
        gantiNomor: setCurNumber,
        score,
        setScore,
        timeOver,
        answered,
        setAnswered,
      }}
    >
      {props.children}
    </SoalContext.Provider>
  );
};

export const useSoal = () => useContext(SoalContext);
