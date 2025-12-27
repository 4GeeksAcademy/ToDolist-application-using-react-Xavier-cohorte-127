import { useState } from "react";

const Home = () => {
	const [todoList, setTodoList] = useState([]);
	const [inputValue, setInputValue] = useState("");

	function handleSubmit(e) {
		e.preventDefault(); // evita recarga

		if (inputValue.trim() === "") return; // evita tareas vacías

		setTodoList([...todoList, inputValue]);
		setInputValue(""); // limpia el input
	}

	return (
		<div className="container mt-5"> 
			<h1>To Do List</h1>

			{/* FORM */}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Escribe una tarea y pulsa Enter"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</form>

			{/* LISTA */}
			<ul className="list-group mt-3">
				{todoList.map((task, index) => (
					<li key={index} className="list-group-item">
						{task}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
