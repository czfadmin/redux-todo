import todos, { addTodo } from "../features/todos/todosSlice";

describe("todos reducer", () => {
	it("should handle initial state", () => {
		expect(todos(undefined, {})).toEqual([]);
	});

	it("should handle ADD_TODO", () => {
		expect(
			todos([], {
				type: "ADD_TODO",
				text: "Run the tests",
				id: 0
			})
		).toEqual([
			{
				text: "Run the tests",
				completed: false,
				id: 0
			}
		]);


	});

	it("should handle TOGGLE_TODO", () => {
		expect(
			todos(
				[
					{
						text: "Run the tests",
						completed: false,
						id: 1
					},
					{
						text: "Use Redux",
						completed: false,
						id: 0
					}
				],
				{
					type: "TOGGLE_TODO",
					id: 1
				}
			)
		).toEqual([
			{
				text: "Run the tests",
				completed: true,
				id: 1
			},
			{
				text: "Use Redux",
				completed: false,
				id: 0
			}
		]);
	});
});


describe('addTodo', () => {
	if ('should generate incrementing todo ids', () => {
		const action1 = addTodo('a');
		const action2 = addTodo('b');
		expect(action1.payload).toEqual({ id: 0, text: 'a' });
		expect(action2.payload).toEqual({ id: 1, text: 'b' });
	});
});