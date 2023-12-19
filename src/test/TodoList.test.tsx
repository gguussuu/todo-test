import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("render", () => {
  it("renders App component", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("해야 할 일을 작성하세요.");
    const button = screen.getByText("추가");
    fireEvent.change(input, {
      target: {
        value: "TDD-TODO",
      },
    });
    fireEvent.click(button);
    expect(input).toHaveAttribute("value", "");
  });
});
