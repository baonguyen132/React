import "./card_item.scss"
function CardItem(props) {
    return (
        <div className="item">
            <div className="icon">
                {
                    props.icon
                }
            </div>
            <h2>{props.title}</h2>
            <div className="content">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default CardItem