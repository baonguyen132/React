// function Button(props) {
//     // console.log(classs, childrens);
//     console.log(props.class);
//     return <button className={props.class}>{props.children}</button>
// }

import { React, Component } from "react";

// export default Button

class Button extends Component {
    render() {

        const text = this.props.text ?? "default"

        return (
            <>
                <h1>{text}</h1>
            </>
        )
        
    }
}
export default Button 