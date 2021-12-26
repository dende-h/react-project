import { atom } from 'recoil';
import { DragDropObject } from '../DragDropObject';

export const todoListState = atom({
	key: 'todoListState',
	default: DragDropObject
});
