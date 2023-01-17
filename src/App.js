import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
