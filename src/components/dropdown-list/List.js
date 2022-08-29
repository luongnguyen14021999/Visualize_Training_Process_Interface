import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown";

export default function List() {
    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
      setOptionValue(e.target.value);
    };
  
    return (
      <div>
        <Dropdown
          formLabel="Choose a model"
          buttonText="Generate"
          onChange={handleSelect}
          action="/"
        >
          <Option selected value="Click to see options" />
          <Option value="Option 1" />
          <Option value="Option 2" />
          <Option value="Option 3" />
        </Dropdown>
        <p>You selected {optionValue} </p>
      </div>
    );
}