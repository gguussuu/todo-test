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
      <div
        onClick={() => toggleCompleted(id)}
        className={`w-6 h-6 rounded-full border cursor-pointer inline-flex justify-center items-center bg-white ${
          completed ? "border-blue-500 text-blue-500" : "border-gray-400"
        }`}
      >
        {completed && <CheckIcon className="w-5" />}
      </div>
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
