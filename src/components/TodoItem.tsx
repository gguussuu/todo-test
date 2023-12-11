import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";

interface ITodoItemProps {
  id: number;
  todo: string;
  completed: boolean;
  DeleteTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

const TodoItem = ({
  id,
  todo,
  completed,
  DeleteTodo,
  toggleCompleted,
}: ITodoItemProps) => {
  return (
    <li className="flex">
      <input
        id="completed"
        type="checkbox"
        className="hidden peer"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <label
        htmlFor="completed"
        className="w-6 h-6 rounded-full border border-gray-400 inline-flex items-center justify-center peer-checked:border-blue-500 text-white peer-checked:text-blue-500"
      >
        <CheckIcon className="w-5" />
      </label>
      <span className="ml-3 peer-checked:line-through">{todo}</span>
      <div
        className="ml-5 text-gray-400 cursor-pointer"
        onClick={() => DeleteTodo(id)}
      >
        <TrashIcon className="w-5" />
      </div>
    </li>
  );
};
export default TodoItem;
