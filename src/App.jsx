import ExpenseItem from './components/Expenses/ExpenseItem';
import './App.css';
function App() {
  const expense = [
    {
      id: "p1",
      title: "Car Insurance",
      amount: 399.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "p2",
      title: "Toilet paper",
      amount: 99.67,
      date: new Date(2020, 7, 18),
    },
    {
      id: "p3",
      title: "New Tv",
      amount: 799.67,
      date: new Date(2022, 5, 21),
    },
    {
      id: "p4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 6, 16),
    },
  ];
  return (
    <div className='app'>
      <ExpenseItem
      title={expense[0].title}
      amount={expense[0].amount}
      date={expense[0].date}>
      </ExpenseItem>
      <ExpenseItem
      title={expense[1].title}
      amount={expense[1].amount}
      date={expense[1].date}>
      </ExpenseItem>
      <ExpenseItem
      title={expense[2].title}
      amount={expense[2].amount}
      date={expense[2].date}>
      </ExpenseItem>
      <ExpenseItem
      title={expense[3].title}
      amount={expense[3].amount}
      date={expense[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
