import { useState } from "react";

const Home = () => {
	const [todoList, setTodoList] = useState([]);
	const [inputValue, setInputValue] = useState("");

	function handleSubmit(e) {
		e.preventDefault(); // evi

		if (inputValue.trim() === "") return; // evita tareas vacías

		setTodoList([...todoList, inputValue]);
		setInputValue(""); // limpia el input
	}

	return (
		<div className="d-flex justify-content-center align-items-start min-vh-100">
			<div className="w-100" style={{ maxWidth: "500px" }}>

				<h1 className="text-center mt-5">To Do List</h1>

				<form onSubmit={handleSubmit} className="mt-4">
					<input
						type="text"
						className="form-control"
						placeholder="Escribe una tarea y pulsa Enter"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
				</form>

				<ul className="list-group mt-3">
					{todoList.map((task, index) => (
						<li key={index} className="list-group-item">
							{task}
						</li>
					))}
				</ul>

			</div>
		</div>
	);
};
export default Home;
