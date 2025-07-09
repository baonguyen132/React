import React, { useState } from "react"
import "./style.scss"

function AppColor() {

    const [color , setColor] = useState("#888888")

    function handleChange(object){
        setColor(object.target.value)
    }

    return(
        <div className="app">
            <h1>Set color App</h1>
            <div className="fills" style={{background: color}}>
                <h2>Color Selected</h2>
                <h2>{color}</h2>
            </div>
            <input type="color" value={color} onChange={handleChange} />
        </div>
    )
}

export default AppColor