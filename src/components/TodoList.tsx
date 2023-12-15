import { useCallback, useEffect, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import Search from "./Search";
import Filter from "./Filter";

interface todo {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<todo[]>([
    { id: 1, todo: "Task 1", completed: false },
    { id: 2, todo: "Task 2", completed: false },
    { id: 3, todo: "Task 3", completed: false },
  ]);
  const [filterTodoList, setFilterTodoList] = useState<todo[]>([]);
  const [todo, setTodo] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filterComplete, setFilterComplete] = useState(true);
  const [filterIncomplete, setFilterIncomplete] = useState(true);

  useEffect(() => {
    setFilterTodoList(todoList);
  }, [todoList]);

  const AddTodo = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        todo: todo,
        completed: false,
      },
    ]);
    setTodo("");
  };

  const toggleCompleted = useCallback(
    (todoId: number) => {
      setTodoList(
        todoList.map((task) =>
          task.id === todoId ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [todoList]
  );

  const DeleteTodo = (todoId: number) => {
    setTodoList(todoList.filter((el) => el.id !== todoId));
  };
  
  const handleSearch = useCallback(() => {
    const searchFilteredList = todoList.filter((el) =>
      el.todo.includes(inputValue)
    );
    inputValue === ""
      ? setFilterTodoList(todoList)
      : setFilterTodoList(searchFilteredList);
  }, [inputValue, todoList]);

  const filtersTodoList = useMemo(() => {
    return filterComplete && filterIncomplete
      ? filterTodoList
      : filterComplete
      ? todoList.filter((el) => el.completed === true)
      : todoList.filter((el) => el.completed === false);
  }, [filterComplete, filterIncomplete, filterTodoList, todoList]);

  const onFilterHandler = useCallback(() => {
    if (filterComplete && filterIncomplete) {
      setFilterComplete(false);
      setFilterIncomplete(false);
    }
    setFilterComplete(!filterComplete);
    setFilterIncomplete(!filterIncomplete);
  }, [filterComplete, filterIncomplete]);

  return (
    <main className="w-full">
      <h2 className="font-bold text-2xl">TODO LIST</h2>
      <div className="flex my-8">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border rounded-l-md w-96 pl-2"
          placeholder="해야 할 일을 작성하세요."
        />
        <button
          onClick={AddTodo}
          className="py-2 px-5 bg-blue-500 text-white rounded-r-md font-bold"
        >
          추가
        </button>
      </div>
      <div className="flex items-center gap-x-10">
        <Filter
          filterComplete={filterComplete}
          filterIncomplete={filterIncomplete}
          onFilterHandler={onFilterHandler}
          setFilterComplete={setFilterComplete}
          setFilterIncomplete={setFilterIncomplete}
        />
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          onClickBtn={handleSearch}
        />
      </div>
      <ul className="mt-10 flex flex-col gap-y-4">
        {filtersTodoList.map(({ id, todo, completed }) => (
          <TodoItem
            key={todo}
            id={id}
            todo={todo}
            completed={completed}
            DeleteTodo={DeleteTodo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </main>
  );
};
export default TodoList;
