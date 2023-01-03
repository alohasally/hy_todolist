import { useState, useEffect } from "react";

const TodoItem = ({
  data: { id, todo, done, isImportant },
  todoItem,
  handleClickComplete,
  handleImportant,
  handleChange,
}) => {
  // const [todoItem, setTodoItem] = useState(todo);

  // const handleChangeInput = (e) => {
  //   const { value: newTodo } = e.target;
  //   setTodoItem(newTodo);
  //   handleChangeTodo(id, newTodo);
  // };

  return (
    <div className="space-y-6 mt-6" key={id}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            className={`${
              done ? "text-[#F65751]" : "text-white text-opacity-10"
            }`}
            onClick={handleClickComplete(id)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
          <input
            type="text"
            className={`placeholder-white bg-[#241722] font-light text-base ${
              done
                ? " line-through decoration-2 text-[#544854]"
                : " text-white "
            } `}
            value={todo}
            checked={done}
            onChange={handleChange(id)}
          />
        </div>
        <div className="">
          <button
            className={`${
              isImportant ? "text-[#F5DFCC]" : "text-white text-opacity-10"
            }`}
            onClick={handleImportant(id)}
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </button>
        </div>
      </div>
      <span className="block border-b-2 border-white border-opacity-10 "></span>
    </div>
  );
};

export default TodoItem;
