import React from "react"
import Answer from "./Answer.js"
import he from "he"


export default function Question(props){

    // console.log(props)
    
   const answersElements = props.answers.map(ans=>(
       <Answer 
         key= {ans.id}
         ansID= {ans.id}
         value={ans.value}
         isSelected={ans.isSelected}
         isCorrect={ans.isCorrect}
         quesID= {props.id}
         selectAnswer= {props.selectAnswer}
         check={props.check}
       />
   ))
  
    return(
        
                <div className="ques--container">
                     <p className="ques">{he.decode(props.question)}</p>
                     <ul className="answers">
                        {answersElements}
                     </ul>
                     <hr />
                </div>     
    )
}
 /*
                               <li onClick={()=>props.selectAnswer(props.id,props.answers[0].id)} style={styles[0]}>
                              {he.decode(props.answers[0].value)}
                            </li>
                            <li onClick={()=>props.selectAnswer(props.id,props.answers[1].id)} style={styles[1]}>
                              {he.decode(props.answers[1].value)}
                            </li>
                            <li onClick={()=>props.selectAnswer(props.id,props.answers[2].id)} style={styles[2]}>
                              {he.decode(props.answers[2].value)}
                            </li>
                            <li onClick={()=>props.selectAnswer(props.id,props.answers[3].id)} style={styles[3]}>
                              {he.decode(props.answers[3].value)}
                            </li>
   */ 