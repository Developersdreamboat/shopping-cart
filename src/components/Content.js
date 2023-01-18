import Products from './content/Products';
import { Routes, Route } from 'react-router-dom';

function Content() {
  return (
    <section>
      <Routes>
        <Route path="/product" element={<Products />} />
      </Routes>
    </section>
  );
}

export default Content;