import { Component } from "react";

class Card extends Component {

    render(){
        return 
        <div>
            <img src={this.props.image} alt="" />
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
        </div>
    }
}

export default Card