import React, { useState } from "react";
import { Input, Radio } from "antd";
import { useDispatch } from "react-redux";
import { searchFilterChange, statusFilterChange } from "../../redux/actions";

const { Search } = Input;

const Filter = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("All");
  const handleSearch = (value) => {
    setInputValue(value);
    dispatch(searchFilterChange(value));
    if (value.trim() !== "") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  const onChange = (e) => {
    dispatch(statusFilterChange(e.target.value));
    setValue(e.target.value);
  };

  return (
    <div>
      <h3>Filter</h3>
      <Search
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading={isLoading && inputValue.trim() !== ""}
      />

      <Radio.Group onChange={onChange} value={value} className="mt-3">
        <Radio value={"All"}>All</Radio>
        <Radio value={"Doing"}>Doing</Radio>
        <Radio value={"Complete"}>Complete</Radio>
      </Radio.Group>
    </div>
  );
};

export default Filter;
