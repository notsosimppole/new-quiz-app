import React, { useState } from 'react'

const AnsBtn = (props) => {
    let styles = { border: '1px solid black' }
    console.log(props.isSelected)
    if (props?.isSub && props.isCorrect && props.isSelected) {
        styles =
        {
            backgroundColor: '#94D7A2',
            border: '0px'
        }

    } else if (props?.isSub && !props.isCorrect && props.isSelected) {
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
    return (
        //Changes - > propsops gets count/count func and submitted
        <div className='ans' style={styles} onClick={(event) => props.handleAnsClick(event, props.id)}>
            {props.ans}
        </div>
    )
}

export default AnsBtn