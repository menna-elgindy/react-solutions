import React from "react"
import he from "he"

export default function Answers(props){
   // console.log(props.check)
        function styles () {
            if(!props.check){
                return{
                    backgroundColor: props.isSelected ? "#D6DBF5" : "#F5F7FB",
                        border: props.isSelected? "none": "0.794239px solid #4D5B9E"
                }
             }
            else{
                if(props.isCorrect){
                    return{
                        backgroundColor:"#94D7A2",
                        border:"none"
                    }
                }
                else{
                    return{
                      opacity: "0.5",
                      backgroundColor: props.isSelected ? "#F8BCBC" : "#F5F7FB",
                      border: props.isSelected? "none": "0.794239px solid #4D5B9E"  
                    }
                }
            }
        
    }
                   
    return(
        <li 
         onClick={()=>props.selectAnswer(props.quesID,props.ansID)} 
         style={styles()}
        >
            {he.decode(props.value)}
        </li>
    )
}