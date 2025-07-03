import { Component } from "react";
import style from "./card.module.scss";
class Card extends Component {
  render() {
    return (
      <div className={style.card}>
        <div
          className={style.image}
          style={{
            backgroundImage: `url(${this.props.image})`,
          }}
        ></div>
        <h2>{this.props.title}</h2>

        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;
