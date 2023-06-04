import './Item.css'
function Items(props)
{
    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.desc}</h2>
                <h2>{props.location}</h2>
                <div className="expense-item__price"> Rs {props.price}</div>
            </div>
        </div>
    )
}

export default Items;