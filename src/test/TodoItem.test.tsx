import { render } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

it("item", () => {
  const initialData = {
    id: 1,
    todo: "test",
    completed: false,
  };
  const deleteTodo = jest.fn();
  const toggle = jest.fn();
  render(
    <TodoItem
      id={initialData.id}
      todo={initialData.todo}
      completed={initialData.completed}
      DeleteTodo={deleteTodo}
      toggleCompleted={toggle}
    />
  );
});
