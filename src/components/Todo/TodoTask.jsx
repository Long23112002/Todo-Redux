import { Checkbox, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodoStatus } from "../../redux/selector";

const TodoTask = ({ name , id , status  }) => {
   const [checked, setChecked] = useState(status); 
   const dispatch = useDispatch();
   const toggleCheckbox = () => {
    const newStatus = !checked;
    setChecked(newStatus);
    dispatch(updateTodoStatus(id, newStatus));
   }
  return (
    <>
      <Row
        justify="space-between"
        style={{
          marginBottom: 3,
          ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
        }}
      >
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {name}
        </Checkbox>
      </Row>
    </>
  );
};
export default TodoTask;
