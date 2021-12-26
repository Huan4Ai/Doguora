import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQuestion } from "../../store/question";
import { Link } from "react-router-dom";
import "./QuestionsPage.css"

function ShowAllQuestions() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state?.question);
  const username = useSelector(state => state?.session?.user?.username)


  useEffect(() => {
    dispatch(getQuestion())
  }, [dispatch]);

  return (
    // <ul>{Object.keys(questions).map(key =>
    //     <li key={questions[key].id}>
    //     <Link to={`/questions/${questions[key].id}`}>
    //       <div>{questions[key].title}</div>
    //     </Link>
    //     </li>)}
    // </ul>


    <div className="questionsContainer">

      <div className="askQuestionBox">
        <p id="askQuestionUsername">{username}</p>
        <p id="askQuestionPrompt">What is your question?</p>
      </div>

      {Object.keys(questions).map((question) => (
        <Link key={questions[question].id} to={`/questions/${questions[question].id}`}>
          <div className="questionsLinks">
            <p className="test"> {questions[question].title} </p>
          </div>
        </Link>
      ))}
    </div>
  );

  // return null;




}

export default ShowAllQuestions;
