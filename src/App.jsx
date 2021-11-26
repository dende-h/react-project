import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { DragDropContext } from "react-beautiful-dnd";
import { ColumnDropArea } from "./components/ColumnDropArea";

//import { uuid } from "uuidv4";
const DragDropObject = {
	dragItem: {
		"todo-1": { id: "todo-1", content: "todo-sample1" },
		"todo-2": { id: "todo-2", content: "todo-sample2" },
		"todo-3": { id: "todo-3", content: "todo-sample3" },
		"todo-4": { id: "todo-4", content: "todo-sample4" }
	},
	dropZone: {
		"column-1": { id: "column-1", title: "Todo", todoIds: [] },
		"column-2": { id: "column-2", title: "In progress", todoIds: [] },
		"column-3": { id: "column-3", title: "Done", todoIds: [] },
		"column-4": { id: "column-4", title: "Delete", todoIds: [] }
	},
	dropZoneOrder: ["column-1", "column-2", "column-3", "column-4"]
};

export const App = () => {
	const [todoText, setTodoText] = useState("");
	const [todoArea, setTodoArea] = useState(["サンプルTodo"]);

	//inputにtodoの入力を反映させるchange関数
	const onChangeTodoText = (event) => {
		setTodoText(event.target.value);
	};
	//ボタンをクリックした際に動く関数
	const onClickButton = () => {
		if (todoText === "") return; //テキストがなにも入力されてなければ何もしない
		const newTodos = [...todoArea, todoText];
		setTodoArea(newTodos);
		setTodoText("");
	};

	const [todoList, setTodoList] = useState(DragDropObject);
	console.log(todoList);

	const onDragEnd = () => {};

	return (
		<>
			<h1>TODOボード</h1>
			<InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickButton} />
			<main>
				<DragDropContext onDragEnd={onDragEnd}>
					<div>
						{todoList.dropZoneOrder.map((columnId) => {
							const columns = todoList.dropZone[columnId];
							const todoText = columns.todoIds.map((todoId) => todoList.dragItem[todoId]);
							return (
								<ColumnDropArea
									key={columns.id}
									dropZone={columns}
									todoText={todoText}
									className="title"
								/>
							);
						})}
					</div>
					{todoList.map((todo) => {
						const todoText = todoList[todo.id];
						return todoText;
					})}

					<div>
						{todoArea.map((todo) => {
							return (
								<div key={todo} className="list-row">
									<p id="todoText">{todo}</p>
								</div>
							);
						})}
					</div>
				</DragDropContext>
				<script type="text/javascript" src="src/index.js"></script>
			</main>
			<h4>Read me</h4>
			【主な実装機能】
			<br />
			TODO入力フォームにタスクを入力して`付箋を貼る`でTODOエリアに追加
			<br />
			作業中はドラッグ＆ドロップでDOINGエリアに付箋を移動
			<br />
			終わったタスクはDONEエリアに付箋を移動
			<br />
			タスクを消去したい場合はDELETEエリアにドロップで削除
			<br />
			タスクを編集したい場合はタスクのテキストをダブルクリックで編集
			<br />
			編集後に入力エリア外をクリックすれば編集確定
		</>
	);
};
