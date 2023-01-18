import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import { DataProvider } from './components/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Content />
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
