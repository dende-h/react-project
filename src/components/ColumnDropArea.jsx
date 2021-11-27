import React from "react";

import styled from "styled-components";
import { TodoText } from "./TodoText";

const DropAreaContainer = styled.div`
    background-color:  ${(props) => {
		const columnId = props.color;
		switch (columnId) {
			case "column-2":
				return "rgb(159, 255, 255)";
			case "column-3":
				return "rgb(253, 255, 154)";
			case "column-4":
				return "rgb(255, 193, 255)";
			default:
				break;
		}
	}};
		min-height: 100px;
		border-radius: 20px;
		margin: 4px;
		padding: 4px;
		padding-bottom: 50px;
`;

const Title = styled.p`
    overflow-wrap: break-word;
    margin-top: 5px;
	  font-weight: bold;
	  color: rgb(82, 82, 82);
`;

export const ColumnDropArea = (props) => {
	const { columns, task } = props;

	return (
		<>
			<DropAreaContainer color={columns.id}>
				<Title>{columns.title}</Title>
				<div>
					{task.map((todo) => (
						<TodoText key={todo.id} todo={todo} />
					))}
				</div>
			</DropAreaContainer>
		</>
	);
};
