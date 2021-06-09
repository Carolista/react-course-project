import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = (props) => {
	
	return (
		<div>
      <NewExpense />
			<Expenses />
		</div>
	);
}

export default App;
