import React from 'react'

const Button = ({handleStart, disable}) => {
    return (
        <button onClick={()=>handleStart()} className="button__start">{ disable ===true ? 'Start':'Restart'}</button>
    )
}

export default Button
