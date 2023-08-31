import { useState } from "react";
export function Text(props) {
  return (
    <div>
      <input
        className="input"
        onKeyDown={props.text}
        placeholder="add task.."
        id="input"
        spellcheck="false"
      ></input>
    </div>
  );
}
export function Butt(props) {
  return (
    <div>
      <button className="button" onClick={props.add_task}>
        add task
      </button>
    </div>
  );
}
export function Todo(props) {
  // const [isDone, setIsDone] = useState(props.done);
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);
  // props.seting(isDone);
  function toggleEditing() {
    setEditing(!editing);
  }

  function handleEditInputChange(event) {
    setEditedText(event.target.value);
  }

  function handleEditKeyDown(event) {
    if (event.key === "Enter") {
      toggleEditing();
      props.editValue(editedText);
    }
  }

  return (
    <div>
      <div id={props.id}>
        <div className="append">
          <div className="texts">
            <button
              onClick={() => props.seting(props.id)}
              className="check_button"
              style={
                props.done
                  ? { backgroundColor: "rgb(102, 102, 102)" }
                  : { backgroundColor: "white" }
              }
            ></button>
            {editing ? (
              <input
                className="editing_div"
                value={editedText}
                onChange={handleEditInputChange}
                onKeyDown={handleEditKeyDown}
                spellCheck="false"
              />
            ) : (
              <p
                style={
                  props.done
                    ? {
                        textDecoration: "line-through",
                      }
                    : { textDecoration: "none" }
                }
              >
                {editedText}
              </p>
            )}
          </div>
          <div className="buttons">
            <svg
              onClick={toggleEditing}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.89 3.39L16.6 6.11C17.06 6.57 17.02 7.35 16.63 7.75L8.62 15.77L3.06 16.93L4.22 11.35C4.22 11.35 11.82 3.72 12.21 3.32C12.6 2.93 13.43 2.93 13.89 3.39ZM11.16 6.18L5.57 11.79L6.68 12.9L12.22 7.25L11.16 6.18ZM8.19 14.41L13.77 8.81L12.7 7.73L7.11 13.33L8.19 14.41Z"
                fill="#fff"
              />
            </svg>
            <svg
              style={!editing ? { display: "block" } : { display: "none" }}
              onClick={() => props.removeid(props.id)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.9167 5C17.9166 5.20411 17.8417 5.40111 17.7061 5.55364C17.5704 5.70617 17.3835 5.80362 17.1808 5.8275L17.0833 5.83333H16.3792L15.3533 16.2667C15.2975 16.8328 15.0331 17.3579 14.6115 17.7399C14.1899 18.1219 13.6414 18.3334 13.0725 18.3333H6.92749C6.35862 18.3334 5.81006 18.1219 5.3885 17.7399C4.96693 17.3579 4.70251 16.8328 4.64666 16.2667L3.62083 5.83333H2.91666C2.69565 5.83333 2.48369 5.74554 2.32741 5.58926C2.17113 5.43298 2.08333 5.22101 2.08333 5C2.08333 4.77899 2.17113 4.56702 2.32741 4.41074C2.48369 4.25446 2.69565 4.16667 2.91666 4.16667H7.08333C7.08333 3.78364 7.15877 3.40437 7.30535 3.05051C7.45192 2.69664 7.66676 2.37511 7.9376 2.10427C8.20844 1.83343 8.52997 1.61859 8.88383 1.47202C9.2377 1.32544 9.61697 1.25 9.99999 1.25C10.383 1.25 10.7623 1.32544 11.1162 1.47202C11.47 1.61859 11.7916 1.83343 12.0624 2.10427C12.3332 2.37511 12.5481 2.69664 12.6946 3.05051C12.8412 3.40437 12.9167 3.78364 12.9167 4.16667H17.0833C17.3043 4.16667 17.5163 4.25446 17.6726 4.41074C17.8289 4.56702 17.9167 4.77899 17.9167 5ZM11.875 7.70833C11.724 7.70834 11.578 7.76304 11.4642 7.86231C11.3504 7.96158 11.2764 8.09871 11.2558 8.24833L11.25 8.33333V14.1667L11.2558 14.2517C11.2764 14.4013 11.3505 14.5383 11.4643 14.6376C11.5781 14.7368 11.724 14.7915 11.875 14.7915C12.026 14.7915 12.1719 14.7368 12.2857 14.6376C12.3995 14.5383 12.4736 14.4013 12.4942 14.2517L12.5 14.1667V8.33333L12.4942 8.24833C12.4736 8.09871 12.3996 7.96158 12.2858 7.86231C12.1719 7.76304 12.026 7.70834 11.875 7.70833ZM8.12499 7.70833C7.97396 7.70834 7.82804 7.76304 7.71422 7.86231C7.6004 7.96158 7.52637 8.09871 7.50583 8.24833L7.49999 8.33333V14.1667L7.50583 14.2517C7.52641 14.4013 7.60046 14.5383 7.71428 14.6376C7.8281 14.7368 7.97399 14.7915 8.12499 14.7915C8.276 14.7915 8.42189 14.7368 8.53571 14.6376C8.64953 14.5383 8.72358 14.4013 8.74416 14.2517L8.74999 14.1667V8.33333L8.74416 8.24833C8.72362 8.09871 8.64959 7.96158 8.53577 7.86231C8.42195 7.76304 8.27603 7.70834 8.12499 7.70833ZM9.99999 2.91667C9.66847 2.91667 9.35053 3.04836 9.11611 3.28278C8.88169 3.5172 8.74999 3.83515 8.74999 4.16667H11.25C11.25 3.83515 11.1183 3.5172 10.8839 3.28278C10.6495 3.04836 10.3315 2.91667 9.99999 2.91667Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
