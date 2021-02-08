import { createSlice } from "@reduxjs/toolkit";
let nextTodoId = 0;
let todosSlice = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		addTodo: {
			reduce(state, action) {
				const { id, text } = action.payload;
				state.push({
					id,
					text,
					completed: false
				});
			},
			prepare(text) {
				return {
					payload: text,
					id: nextTodoId++
				}
			}
		},
		toggleTodo: (state, action) => {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		}
	}
});
export const { addTodo, toggleTodo } = todosSlice.actions;
const todoReducer = todosSlice.reducer;
export default todoReducer;
