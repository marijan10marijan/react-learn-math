import { useState } from "react";

const Template = ({componentOperation, multiplayer}) => {

    const [data, setData] = useState({
        number1: Math.ceil(Math.random()*multiplayer),
        number2: Math.ceil(Math.random()*multiplayer),
        result: '',
        question: 0,
        score: 0,
        correct : true
    }) 


    const yourAnswer = (e)=>{
        setData({
            ...data,
            result: e.target.value
        })
    }

    const isCorrect = (e)=>{
        if(e.key === 'Enter'){
            let answer = parseInt(data.result)
            if(eval(`${data.number1} ${componentOperation} ${data.number2}`) === answer){
                setData({
                    ...data,
                    number1: Math.ceil(Math.random()*multiplayer),
                    number2: Math.ceil(Math.random()*multiplayer),
                    result: '',
                    question: data.question + 1,
                    score: data.score + 1,
                    correct: true
                })
            }else{
                setData({
                    ...data,
                    number1: Math.ceil(Math.random()*multiplayer),
                    number2: Math.ceil(Math.random()*multiplayer),
                    result: '',
                    question: data.question + 1,
                    score: data.score,
                    correct: false
                })
            }
        }
    }

    const callAddComponent = ()=>{
        setData({
            ...data,
            question: 0,
            score: 0,
            correct: true
        })
    }

    if(data.question === 10){
        return (
            <>
                <h1>Your result was {data.score}/{data.question}.</h1>
                <h2>That is {data.score*10}%!</h2>
                <button className="button button-again" onClick={callAddComponent}>Start Again</button>
            </>
        )
    }

    return ( 
        <div>
            <div id="question" className={data.correct ? '' : 'wrong'}>{data.number1} {componentOperation} {data.number2}</div>
            <input autoFocus={true} type="number" onKeyDown={isCorrect} value={data.result} onChange={yourAnswer}/>
            <h2>{data.correct ? 'Guess the answer! ': 'Your answer is wrong! '}</h2>
            <h2>You have {10 - data.question} more questions!</h2>
            <h2 className="score">Score: {data.score}/{data.question}</h2> 
        </div>
     );
}
 
export default Template;