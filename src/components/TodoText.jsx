import React from "react";
import styled from "styled-components";

const TodoTextContainer = styled.div`
	text-align: left;
	background-color: rgb(255, 248, 239);
	margin: 4px;
	padding-left: 8px;
	padding-right: 8px;
	width: 150px;
	border-radius: 2px;
`;

export const TodoText = (props) => {
	const { todo } = props;
	return (
		<TodoTextContainer>
			<p>{todo.content}</p>
		</TodoTextContainer>
	);
};
