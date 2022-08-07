import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import Questions from './Question';
import './Quiz.css';
import { nanoid } from 'nanoid';

export default function Quiz() {
    const [ques, setQues] = useState({})
    const [isSub, setIsSub] = useState(false)
    const [active, setActive] = useState('')

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

    //TODO : Active - ID - set styles acc to active
    //TODO : Count on basis of active



    const quesElem = ques?.results.map(que => {
        let q = decode(que.question)
        let id = nanoid()
        return (<Questions
            key={id}
            id={id}
            question={q}
            correctAns={que.correct_answer}
            incorrectAns={que.incorrect_answers}
            isSub = {isSub}
            //setActive = {(id) => setActive(id)}
        />)
    }
    )

    const handleSubmit = (event) =>{
        event.preventDefault();
        setIsSub(prev => !prev)
    }
    console.log(active);
    return (
        <div className='quiz'>
            <h1>Quiz Time</h1>
            {quesElem}

            <div className="quiz-btn-div">
                <button className="quiz-btn" onClick = {handleSubmit}>Submit</button>
            </div>
        </div>
    )
}