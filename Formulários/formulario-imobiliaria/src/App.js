import "./App.css";
import Form from "./Form";
import Header from "./Header";
import Infos from "./Infos";
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Form />
        <Infos />
      </header>
    </div>
  );
}

export default App;
