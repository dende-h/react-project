import React from "react";

const inputAreaStyle = {
	width: "646px",
	height: "40px",
	backgroundColor: "rgb(252, 235, 170)",
	textAlign: "center",
	margin: "4px",
	borderRadius: "10px",
	paddingTop: "3px"
};

const buttonStyle = {
	borderRadius: "5px",
	border: "none",
	padding: "4px 16px",
	marginTop: "4px",
	backgroundColor: "rgb(252, 135, 154)",
	color: "white"
};

const inputTodoStyle = {
	width: "300px",
	borderRadius: "5px",
	border: "none",
	padding: "6px 16px",
	outline: "none",
	marginTop: "4px",
	marginRight: "6px"
};

export const InputTodo = (props) => {
	const { todoText, onChange, onClick } = props;
	return (
		<div style={inputAreaStyle} className="input-area">
			<input style={inputTodoStyle} value={todoText} onChange={onChange} placeholder="TODOを入力" />
			<button style={buttonStyle} onClick={onClick}>
				付箋を貼る
			</button>
		</div>
	);
};
