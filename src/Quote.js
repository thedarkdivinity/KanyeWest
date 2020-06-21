import React from 'react'

export default function Quote(props) {
    return (
        <h1 className="quote text-white text-capitalize text-center mt-5">{props.text}</h1>
    )
}
