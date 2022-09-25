import React, { Fragment } from "react";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import AnswerBox from "./components/Main/AnswerBox";
import QuizBox from "./components/Main/QuizBox";
import StickyBox from "./components/Main/StickyBox";
import Result from "./components/Main/Result";
import { SoalContextProvider, useSoal } from "./Context/SoalContext";
import { AuthContextProvider, useAuth } from "./Store/AuthContext";
import "./App.css";
import Logout from "./components/Login/Logout";

function App() {
  return (
    <AuthContextProvider>
      <SoalContextProvider>
        <Game />
      </SoalContextProvider>
    </AuthContextProvider>
  );
}

function Game() {
  const ctxAuth = useAuth();
  const ctxResult = useSoal();
  const isOver = ctxResult.nomor > ctxResult.quizDatas?.length;
  console.log(ctxResult);

  return (
    <Fragment>
      <Header />
      {!ctxAuth.isLoggedIn && <Login />}
      {ctxAuth.isLoggedIn && !isOver && (
        <Fragment>
          <QuizBox />
          <AnswerBox />
          <StickyBox />
        </Fragment>
      )}
      {isOver && <Result />}
      {ctxAuth.isLoggedIn && <Logout />}
    </Fragment>
  );
}

export default App;
