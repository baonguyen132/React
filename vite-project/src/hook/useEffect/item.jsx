
function Itemss({item}) {
    return (
        <div className="item">
            <p className="id">{item.id}</p>
            <p className="title">{item.title}</p>
            <p className="body">{item.body}</p>
        </div>
    )
}

export default Itemss