import { data } from "autoprefixer";
import { useState, useEffect } from "react";

const TodoItem = ({
  data: { id, todo, done, isImportant },
  handleClickComplete,
  handleImportant,
  handleChange,
  todoDelete,
  handleDeleteItem,
}) => {
  // const [todoItem, setTodoItem] = useState(todo);

  // const handleChangeInput = (e) => {
  //   const { value: newTodo } = e.target;
  //   setTodoItem(newTodo);
  //   handleChangeTodo(id, newTodo);
  // };

  return (
    <div className={`${todoDelete ? "" : "space-y-8 mt-8 "}`} key={id}>
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
            className={`placeholder-white bg-[#241722] font-light text-base focus:border-none focus:outline-[#F5DFCC] focus:bg-[#372935] ${
              done
                ? " line-through decoration-2 text-[#544854]"
                : " text-white "
            } `}
            value={todo}
            checked={done}
            onChange={handleChange(id)}
          />
        </div>
        <div className="space-x-6 flex items-center">
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
          <div
            className={`${
              todoDelete ? "bg-[#F65751] py-8 px-2" : "invisible "
            }`}
            onClick={handleDeleteItem(id)}
          >
            <button className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <span className="block border-b-2 border-white border-opacity-10 "></span>
    </div>
  );
};

export default TodoItem;
