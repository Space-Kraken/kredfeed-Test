import React from 'react'

export default function Title(props: any) {
    return (
        <h1 className={props.style}>
            {props.text}
        </h1>
    )
}
