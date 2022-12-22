import { Dispatch, SetStateAction } from "react";
import "./styles.css";

interface props {
  todo: string ;
  setTodo: Dispatch<SetStateAction<string >>;
}

const InputField = ({ todo, setTodo }: props) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
      />

      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
