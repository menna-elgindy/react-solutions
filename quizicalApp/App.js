import React from "react"
import Question from "./components/Question.js"
import {nanoid} from "nanoid"


export default function App(){
    
      const [quizData,setQuizData]=React.useState([])
      const [questions,setQuestions]=React.useState([])
      const [check,setCheck]=React.useState( false )
      const [score,setScore]=React.useState( 0 )
        
        //console.log("Component rendered")
        //console.log(questions)

        React.useEffect(()=>{
             setQuestions(allQuestions())
        },[quizData])

            function startNewQuiz(){
                fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                .then(res => res.json())
                .then(data => setQuizData(data.results))
                //setQuestions(allQuestions())
            }
            
            function shuffle(array) {
                let currentIndex = array.length,  randomIndex;
                // While there remain elements to shuffle.
                while (currentIndex != 0) {
                    // Pick a remaining element.
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
                    // And swap it with the current element.
                    [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
                return array;
            }
            
            
            function allQuestions(){
                
                const questionsArr=[]
                    quizData.forEach(quiz=>{
                        let ansArr= shuffle([...quiz.incorrect_answers,quiz.correct_answer])
                        ansArr=ansArr.map(ans=>(
                            {
                                id:nanoid(),
                                value:ans,
                                isSelected:false,
                                isCorrect:ans==quiz.correct_answer
                            }
                        ))
                        
                        const question ={
                            id:nanoid(),
                            question:quiz.question,
                            answers:ansArr,
                            correctAnswer:quiz.correct_answer
                        }
                        
                        questionsArr.push(question)
                    })
                    //console.log(questionsArr)
                    return questionsArr
                 }
                 
                function selectAnswer(quesID,ansID){
                   
                     setQuestions(oldQues => oldQues.map(ques =>{ 
                           return ques.id === quesID ? 
                                {...ques,
                                answers: ques.answers.map(ans => {
                                    return ans.id === ansID ? 
                                        {...ans, isSelected: !ans.isSelected} :
                                    {...ans, isSelected: false}
                                    })
                                 }
                                :
                                 {...ques}
                      }))   
                 }
                    
            function checkAnswers(){
                setCheck(true)
        
                questions.forEach(ques=>{
                  let isCorrectAns = ques.answers.some((ans)=>ans.isCorrect && ans.isSelected)
                  if(isCorrectAns){setScore(prevScore=>prevScore+1)}
                })
                
                
            }
            
            function playAgain(){
                setQuizData([])
                setCheck(false)
                setScore(0)
            }
            

            const questionElements = questions.map(ques=>(
                <Question 
                    key = {ques.id}
                    id =  {ques.id}
                    question={ques.question}
                    answers={ques.answers}
                    correctAnswer={ques.correctAnswer}
                    selectAnswer={selectAnswer}
                    check={check}
                />  
            ))
           
    return(
        <main>
            {
               quizData.length > 0 ?
               
               <div className="quiz--page">
                    {questionElements}
                    {!check && 
                    <button className="checkAns--btn" onClick={checkAnswers}>Check answers</button>
                    }
                    {check &&
                    <div className="score--container">
                        {<p className="score">You scored {score}/5 correct answers </p>}
                        <button className="playAgain--btn" onClick={playAgain}>Play again</button>
                    </div>
                    }
                    
               </div> 
               :
               <div className ="intro--page">
                    <h1 className="intro--title">Quizzical</h1>
                    <h4 className="intro--description">Some description if needed</h4>
                    <button className="intro--button" onClick={startNewQuiz}>Start quiz</button>
               </div>   
            }
        </main>
    )
}