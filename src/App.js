import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "pokoloruj obrazek", done: false },
  { id: 2, content: "uratuj świat", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" main={<Form />} />

      <Section title="Lista zadań" 
      main={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
