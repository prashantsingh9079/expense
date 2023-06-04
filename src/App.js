import TitleExpense from './Components/TitleExpense';
import Items from './Components/Items';
import './App.css';

function App() {
  const expenseList = [
    {
      date: new Date(2023, 5, 4),
      desc: "car insurance",
      price: 8000,
      location: "faridabad"
    },
    {
      date: new Date(2023, 5, 5),
      desc: "petrol",
      price: 2200,
      location: "delhi"
    },
    {
      date: new Date(2023, 5, 6),
      desc: "shopping",
      price: 7500,
      location: "safidon"
    }
  ]
  return (
    <div className="App">
      <Items date={expenseList[0].date.toISOString()}
        desc={expenseList[0].desc}
        price={expenseList[0].price}
        location={expenseList[0].location} />
      <Items date={expenseList[1].date.toISOString()}
        desc={expenseList[1].desc}
        price={expenseList[1].price}
        location={expenseList[1].location} />
      <Items date={expenseList[2].date.toISOString()}
        desc={expenseList[2].desc}
        price={expenseList[2].price}
        location={expenseList[2].location} />
    </div>
  );
}

export default App;
