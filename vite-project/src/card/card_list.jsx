import CardItem from "./card_item";
import "./card_list.scss"
function CardList() {
  return (
    <div className="list">
      <CardItem
        icon={<i class="bxr  bx-moon"></i>}
        title="Dark Mode"
        content="Beutiful dark theme that's easy on the eyes"
      />
      <CardItem
        icon={<i class='bxr  bx-sun'  ></i> }
        title="Light Mode"
        content="Clean and bright interface for daytime use"
      />
      <CardItem
        icon={<i class='bxr  bx-user-square'  ></i>}
        title="User Friendly"
        content="Intuitive design that everyone can use"
      />
    </div>
  );
}

export default CardList;
