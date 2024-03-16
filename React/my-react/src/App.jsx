import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Iron man" age={30} isStudent={true} />
      <Student name="Spider man" age={32} isStudent={false} />
      <Student name="Thor" age={1500} isStudent={true} />
      <Student name ="Hulk"/>
    </>
  );
}

export default App
