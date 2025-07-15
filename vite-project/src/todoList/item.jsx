import "./item.scss"

function Item(props) {
  return (
    <div className="item" key={props.index}>
      <div className="content">
        <h4>{props.item.name} - {props.item.status}</h4>
      </div>
      {props.children}
    </div>
  );
}

export default Item