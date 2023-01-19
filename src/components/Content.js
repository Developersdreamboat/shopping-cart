import Products from './content/Products';
import Details from './content/Details';
import { Routes, Route } from 'react-router-dom';

function Content() {
  return (
    <section>
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </section>
  );
}

export default Content;