import { useState } from "react";

/**
 * 
 * @returns Controlled components
 * There are native HTML elements that maintain their own internal state. 
The input element is a great example. You type into an input and it updates its own value on every keystroke. 
For many use-cases, you would like to control the value of the input element, i.e., set its value yourself. 
This is where controlled components come in.
 */
export function CustomInput() {
    const [value, setValue] = useState("");
  
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  }
  