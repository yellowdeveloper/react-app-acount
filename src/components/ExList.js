import "./ExList.css"
import ExItem from "./ExItem"

const ExList = ({expenses, handleDelete, handleEdit}) => {
    return (
      <>
        <ul className="list">
          {expenses.map(expense => {
            return(
              <ExItem
              expense = {expense}
              key={expense.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              /> 
            )
          })}
            
        </ul>
        
      </>
    )
}

export default ExList
