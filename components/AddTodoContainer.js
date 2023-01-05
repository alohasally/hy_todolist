import React, { useMemo, useState } from "react";

const AddTodoContainer = ({ todoData, setTodoData }) => {
  const [text, setText] = useState("");

  const newTodoData = useMemo(
    () => [
      ...todoData,
      {
        id: Date.now(),
        todo: text,
        done: false,
        isImportant: false,
      },
    ],
    [todoData, text]
  );

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleKeyDown = (e) => {
    const { value } = e.target;
    if (e.key !== "Enter") return;
    setText(value);

    setTodoData(newTodoData);
    localStorage.setItem("todoItems", JSON.stringify(newTodoData));
    setText("");
  };

  const handleClick = (e) => {
    if (!text) return;
    setTodoData(newTodoData);
    localStorage.setItem("todoItems", JSON.stringify(newTodoData));
    setText("");
  };

  return (
    <div className="w-full  my-4 space-y-3">
      <input
        className="h-9 px-4 w-full rounded-md text-sm font-thin placeholder-white placeholder-opacity-70 bg-[#372935] opacity-90 text-white focus:outline-[#F5DFCC] focus:outline-none "
        placeholder="오늘 할 일을 입력해 주세요"
        name="value"
        value={text}
        onChange={changeInput}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="h-9 w-full rounded-md bg-[#F65751] text-white text-sm"
        onClick={handleClick}
      >
        저장
      </button>
    </div>
  );
};

export default AddTodoContainer;
