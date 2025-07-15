import "./selects.scss"

function Selects(props) {
  return (
    <select
      name="status"
      id="status"
      className="statusSelect"
      onChange={(object) => props.handle(object.target.value)}
      value={props.item.status}
    >
      {props.status.map((statusItem, index) => (
        <option value={statusItem} key={index}>
          {statusItem}
        </option>
      ))}
    </select>
  );
}

export default Selects;
