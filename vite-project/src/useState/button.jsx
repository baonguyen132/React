import React from "react"

function Button(props) {
    return <button onClick={props.handleOnClick}>{props.children}</button>
}

export default Button