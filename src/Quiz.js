import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import Questions from './Question';
import './Quiz.css';
import { nanoid } from 'nanoid';

export default function Quiz() {
    const [ques, setQues] = useState({})
    const [score, setScore] = useState(0)
    useEffect(() => {
        const fun = async () => {
            let res = await fetch('https://opentdb.com/api.php?amount=5');
            let data = await res.json()
            setQues(data)
        }
        fun();
    }, [])

    if (Object.keys(ques).length === 0) {
        return <h1 className='loading'>Loading</h1>;
    }
    
    

    const quesElem = ques?.results.map(que => {
        let q = decode(que.question)
        let id = nanoid()
        return (<Questions
            key={id}
            id={id}
            question={q}
            correctAns={que.correct_answer}
            incorrectAns={que.incorrect_answers}
            isSub = {true}
            setScore = {setScore}
        />)
        
    }
    )
    console.log(score)
    return (
        <div className='quiz'>
            <h1>Quiz Time</h1>
            {quesElem}
            {/* {<h2>Your Score is {score}</h2>} */}
        </div>
    )
}