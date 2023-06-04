import './Item.css'
function Items()
{
    const expenseDate = new Date(2023,5,4);
    const expenseDesc = "Car Insurance";
    const expensePrice = 8000;
    const loc = "Faridabad";
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseDesc}</h2>
                <h2>{loc}</h2>
                <div className="expense-item__price"> Rs {expensePrice}</div>
            </div>
        </div>
    )
}

export default Items;