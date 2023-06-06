import "./style.css";

const Form = () => (
    <form className="form">
        <input autoFocus placeholder="Co jest do zrobienia?" className="form__input" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;