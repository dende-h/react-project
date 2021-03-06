import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { useRouteHandle } from "../hooks/useRouteHandle";

export const TodoText = memo((props) => {
	console.log("TodoText");
	const { todo, index } = props;
	const { onDoubleClick } = useRouteHandle();
	return (
		<Draggable draggableId={todo.id} index={index}>
			{(provided, snapshot) => (
				<TodoTextContainer
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					isDragging={snapshot.isDragging}
					onDoubleClick={() => onDoubleClick(`/todoEdit/${todo.id}`, todo)}
				>
					{todo.content}
				</TodoTextContainer>
			)}
		</Draggable>
	);
});

//スタイル
const TodoTextContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px;
  margin-left: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  min-width: 150px;
  min-height: 20px;
  word-break: break-all;
  font-size: 20px;
`;
