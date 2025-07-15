import { element, object } from "prop-types";
import { useState } from "react";
import Item from "./item";
import Selects from "./selects/Selects";
import "./todoList.scss";

function TodoList() {
  const [list, setList] = useState([]);
  const [news, setNews] = useState("");
  const status = ["Created", "In progress", "Done"];

  const element = document.querySelector(".input");

  function handleNews(object) {
    setNews(object.target.value);
    if(object.target.value != ""){
      element.classList.add("action")
    }
    else {
      element.classList.remove("action")
    }
    

  }
  function handleAdd() {
    const itemNews = {
      name: news,
      status: status[0],
    };
    setList((list) => [...list, itemNews]);

    setNews("");
    element.classList.remove("action")

  }
  function handleSelectChange(value, index) {
    const listNews = [...list];
    listNews[index].status = value;
    setList(listNews);
  }

  function handleDelete(index) {
    setList((list) => list.filter((_, i) => i != index));
  }

  return (
    <>
      <div className="todolist">
        <h1>TodoList</h1>
        <div className="form">
          <div className="input">
            <input
              type="text"
              name="content"
              value={news}
              onChange={handleNews}
            />
            <span>Todo</span>
          </div>
          <button className="add" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>

      <div className="list">
        <h1>List</h1>
        {list.map((item, index) => (
          <Item item={item} index={index}>
            <div className="groupButton">
              <Selects
                status={status}
                item={item}
                handle={(value) => handleSelectChange(value, index)}
              />
              <div className="delete">
                <button onClick={() => handleDelete(index)}><i class='bxr  bx-backspace'></i> </button>
              </div>
            </div>
          </Item>
        ))}
      </div>
    </>
  );
}

export default TodoList;
