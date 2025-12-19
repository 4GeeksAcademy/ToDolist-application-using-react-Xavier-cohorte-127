import { useState } from "react";

//create your first component
const Home = () => {
	const [todoList, setTodoList] = useState([])
	const [inputValue, setInputValue] = useState([""])
	function handleSubmit(e) {
		e.preventDefault()

		const newTask = {
			label: inputValue,
			is_done: false
		}
		setTodoList([...todoList, newTask]);
		setInputValue(""); // Limpiar el input después de agregar la tarea



	}





	return (
		<div className="text-center">
			<h1>To Do List</h1>
			<div>
				<form>
					<input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
					
				</form>
				<div>
					{/* Aquí renderizamos la lista */}
				</div>
			</div>
		</div>
	);
};

export default Home;