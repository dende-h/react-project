import React from "react";

import styled from "styled-components";

const DropAreaContainer = styled.div`
    background-color: rgb(159, 255, 255);
		min-height: 100px;
		border-radius: 20px;
		margin: 4px;
		padding: 4px;
		padding-bottom: 50px;

    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    overflow-wrap: break-word;
    margin-top: 5px;
	  font-weight: bold;
	  color: rgb(82, 82, 82);
`;

const TodoTextContainer = styled.div`
	text-align: left;
	background-color: rgb(255, 248, 239);
	margin: 4px;
	padding-left: 8px;
	padding-right: 8px;
	width: 150px;
	border-radius: 2px;
`;

export const ColumnDropArea = (props) => {
	const { dropZone, todoText } = props;

	return (
		<>
			<DropAreaContainer>
				<Title>{dropZone.title}</Title>

				<TodoTextContainer>
					<p>{todoText.content}</p>
				</TodoTextContainer>
			</DropAreaContainer>
		</>
	);
};
