import React, { useState } from "react";
import TodoTask from "../Todo/TodoTask";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { statusFilterSelector, todoListSelector } from "../../redux/selector";
const { Search } = Input;

const TodoMenu = () => {
  const dispatch = useDispatch();
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const [errorTaskName, setErrorTaskName] = useState("");
  const todoList = useSelector(todoListSelector);
  const statusFilter = useSelector(statusFilterSelector);
  console.log({ statusFilter });
  const handleAddTask = (value) => {
    if (value.trim() === "") {
      setErrorTaskName("Task name is not empty");
      return;
    }
    if (value.trim() !== "") {
      setErrorTaskName("");
    }
    setIsLoadingAdd(true);
    setTimeout(() => {
      setIsLoadingAdd(false);
      dispatch(
        addTodo({
          id: Math.random().toString(36).substr(2, 9),
          nameTask: value,
          status: false,
        })
      );
    }, 500);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mt-3">
        {todoList.map((todo) => {
          if (statusFilter === "All") {
            return (
              <TodoTask
                key={todo.id}
                name={todo.nameTask}
                id={todo.id}
                status={todo.status}
              />
            );
          } else if (statusFilter === "Doing" && !todo.status) {
            return (
              <TodoTask
                key={todo.id}
                name={todo.nameTask}
                id={todo.id}
                status={todo.status}
              />
            );
          } else if (statusFilter === "Complete" && todo.status) {
            return (
              <TodoTask
                key={todo.id}
                name={todo.nameTask}
                id={todo.id}
                status={todo.status}
              />
            );
          } else {
            return null;
          }
        })}
        </div>
        <div className="col-12 mt-3">
          <Search
            placeholder="input search text"
            enterButton="Add task"
            size="large"
            loading={isLoadingAdd}
            onSearch={handleAddTask}
          />
          <span className="text-danger">{errorTaskName}</span>
        </div>
      </div>
    </>
  );
};
export default TodoMenu;
