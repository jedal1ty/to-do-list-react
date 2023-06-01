import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <span className="section__buttons buttons__button">
            <button className="buttons__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}> Ukończ wszystkie
            </button>
        </span>
    )
};

export default Buttons;