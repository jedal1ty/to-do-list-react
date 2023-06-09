import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="taskList">
    {tasks.map((task) => (
      <li
        className={`taskList__item ${task.done && hideDoneTasks ? "taskList__item--hidden" : ""}`}
      >
        <button className="taskList__button taskList__button--finished">
          {task.done ? "✓" : ""}
        </button>
        <span className={`taskList__content ${task.done ? "taskList__content--finished" : ""}`}>
          {task.content}
        </span>
        <button className="taskList__button taskList__button--delete">🗑️</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
