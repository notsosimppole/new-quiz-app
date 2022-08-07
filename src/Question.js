import { decode } from 'html-entities';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import AnsBtn from './AnsBtn';

export default function Questions(props) {

    const [ansData, setAnsData] = useState([])
    console.log(props)
    let ansList = props.incorrectAns;
    
    useEffect(() => {
        let index = Math.floor(Math.random() * ansList?.length)
        ansList?.splice(index, 0, props.correctAns)
        setAnsData(ansList?.map(ans => {
            return {
                id: nanoid(),
                value: ans,
                isCorrect: ans === props.correctAns ? true : false,
                isSelected: false
            }
        }))
        console.log("me sab kuch chodd rha hu")
    }, [ansList, props.correctAns])

    if (props.incorrectAns.length === 0) {
        return <h1 className='loading'>Loading</h1>
    }

    const handleAnsClick = (event, id) => {
        event.preventDefault();
        setAnsData(prevData => {
            return prevData.map(data => {
                return data.id === id ? { ...data, isSelected: true } : { ...data, isSelected: false }
            })
        })
        
    }
    console.log(ansData)



    let ansElem = {}
    ansList = [...new Set(ansList)]
    ansElem = ansData?.map(data => (
        <AnsBtn key = {data.id}
        ans={decode(data.value)}
        isSub={props?.isSub}
        handleAnsClick = {handleAnsClick}
        {...data} />
    ))

    return (
        <div className="question-area">
            <span className="question">
                <h2>{props.question}</h2>
            </span>
            <span className="answers">
                {ansElem}
            </span>
        </div>
    )
}