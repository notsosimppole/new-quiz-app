import React from 'react'

const AnsBtn = (props) => {
    let styles = { border: '1px solid black' }
    if (props.isCorrect && props.isSelected) {
        styles =
        {
            backgroundColor: '#94D7A2',
            border: '0px'
        }

    } else if (!props.isCorrect && props.isSelected) {
        styles =
        {
            backgroundColor: '#F8BCBC',
            border: '0px'
        }

    } else if (props.isSelected) {
        styles =
        {
            backgroundColor: '#D6DBF5',
            border: '0px'
        }

    }
    let isCorrectAns = props.isCorrect && props.isSelected
    console.log(isCorrectAns)
    return (
        //Changes - > propsops gets count/count func and submitted
        <div className='ans' style={styles} onClick={(event) => props.isConv && props.handleAnsClick(event, props.id, isCorrectAns)}>
            {props.ans}
        </div>
    )
}

export default AnsBtn