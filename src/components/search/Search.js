import { inputAction } from "../../store/inputSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import classes from "./Search.module.css";
import { useState } from "react";
import Button from "../UI/Button";

const isNotEmpty = (value) => value.trim() !== "";
const Search = (props) => {
  //   const userInput = useSelector((state) => state.input.input);
  const [userInput, setUserInput] = useState("");
  const [validIput, setValidInput] = useState(true);
  const [showClear,setShowClear] = useState(false);
  const dispatch = useDispatch();

  async function getUsers(input) {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${input}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&per_page=100`
    );
    dispatch(inputAction.userHandler(res.data.items));
  }

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
    setValidInput(isNotEmpty(event.target.value));
   
  };
  const searchUserHandler = () => {
    if (!isNotEmpty(userInput)) {
      setValidInput(false);
      return;
    }
    setUserInput(true);
    getUsers(userInput);
    setUserInput("");
    setShowClear(true);
  };
  const clearUsersHandler = ()=>{
      dispatch(inputAction.userHandler([]));
      setShowClear(false);
  }

  return (
    <>
      <div className={classes.search}>
        <input placeholder="user name..." onChange={userInputHandler} value={userInput}  />
        <Button classes={classes.btn} onClick={searchUserHandler}>Search user</Button>
      { showClear&& <Button onClick={clearUsersHandler}>Clear useres</Button>}
      </div>
      {!validIput && (
        <div className={classes["error-valid"]}>
          <p>Please enter something</p>
        </div>
      )}
    </>
  );
};

export default Search;
