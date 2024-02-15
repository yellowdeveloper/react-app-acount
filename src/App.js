import './App.css';
import { useState } from "react";
import ExForm from "./components/ExForm"
import ExList from "./components/ExList"

const App = () => {
  const [charge, setCharge] = useState(""); // usestate 내부는 초기값
  const [amount, setAmount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');

  const [expenses, setExpenses] = useState([
    {id: 1, charge: "스파게티 면", amount: 5500},
    {id: 2, charge: "토마토 소스", amount: 8300},
    {id: 3, charge: "양파 1망", amount: 3500},
    ]
  )
  const handleCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  }
  const handleAmount =(e) => {
    console.log(e.target.value);
    setAmount(e.target.valueAsNumber);
  }
  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id)
    console.log(newExpenses);
    setExpenses(newExpenses);
  }
  // 수정 버튼을 누를 시 발생하는 이벤트
  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id);
    const {charge, amount} = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0){
      if(edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item
        })
        setExpenses(newExpenses);
        setEdit(false);
      }else{
        const newExpense = {id: crypto.randomUUID(), charge, amount}
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
      }
      setCharge("");
      setAmount(0);
    }else{
      console.log('error');
    }
  }
    return (
      <div className="App">
        <h1>스파게티 장보기</h1>
        <div style={{width: '100%', backgroundColor:'white', padding: '1.5rem', borderRadius: '10px', marginBottom: "10px"}}>
          <ExForm
          handleCharge={handleCharge}
          charge={charge}
          handleAmount={handleAmount}
          amount={amount}
          handleSubmit={handleSubmit}
          edit={edit}
          />
        </div>
        <div style={{width: '100%', backgroundColor:'white', padding: '1.5rem', borderRadius: '10px'}}>
          <ExList 
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          />
        </div>  
      </div>
    )
}

export default App;
