import React, { Component } from "react";
import "./list.scss";
import PropTypes from "prop-types";


class List extends Component {
  render() {
    const listItem = this.props.listItem ?? [];
    const title = this.props.title ?? "Category";

    function handleClick(id) {
      const list = document.querySelectorAll(".item");
      list.forEach((item) => {
        item.classList.remove("action");
      });

      const selector = "#item_item_" + id;
      const li = document.querySelector(selector);
      li.classList.toggle("action");
    }

    const listItemLi = listItem.map((item) => (
      <li
        onClick={() => handleClick(item.id)}
        className="item"
        id={"item_item_" + item.id}
        key={item.id}
      >
        {item.name}: <b>{item.calories}</b>
      </li>
    ));

    return (
      <div>
        <h3>{title}</h3>
        <ul>{listItemLi}</ul>
      </div>
    );
  }
}

List.propTypes = {
  title: PropTypes.string,
  listItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

export default List;
