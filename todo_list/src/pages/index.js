import { Text, Butt, Todo } from "@/components/Imports";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState();
  const [editing] = useState();

  function editbool(id) {
    // setEditing(bool);

    const newList = list.map((element) => {
      if (element.id == id) {
        return { ...element, done: !element.done };
      }

      return element;
    });

    setList(newList);
  }
  function click(event) {
    setValue(event.target.value);
    if (event.key == "Enter") {
      let random_number = Math.floor(Math.random() * 1000);
      setList([
        ...list,
        {
          id: random_number,
          text: event.target.value,
          done: editing,
          editing: edit,
        },
      ]);
      event.target.value = "";
    }
  }
  function remove(id) {
    const newTodoList = list.filter((element) => element.id !== id);
    setList(newTodoList);
  }
  function butt() {
    let random_number = Math.floor(Math.random() * 1000);
    setList([
      ...list,
      { id: random_number, text: value, done: editing, editing: false },
    ]);
  }
  function editValue(event) {
    if (event.key == "Enter") {
      setEdit(!edit);
    }
  }

  return (
    <div className="body">
      <div>
        <div className="header">
          <p>My ToDo List</p>
          <div className="done_task">
            <p>
              {list.filter((element) => element.done === true).length} /{""}
              {list.length}
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        {list.map((names) => (
          <div>
            <Todo
              removeid={remove}
              id={names.id}
              done={names.done}
              text={names.text}
              editValue={editValue}
              edit={setEdit}
              seting={editbool}
              isDone={names.done}
            />
          </div>
        ))}
        <div className="control">
          <Text text={click} />
          <Butt add_task={butt} />
        </div>
      </div>
    </div>
  );
}
