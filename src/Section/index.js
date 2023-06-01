import "./style.css";

const Section = ({ title, main, extraHeaderContent }) => (
    <section className="section">
        <h2 className="section__tasks">{title} {extraHeaderContent}</h2>
        <div className="section__main">
            {main}
        </div>
    </section>
);

export default Section;