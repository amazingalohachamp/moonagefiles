import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout, ScrollToTop } from './components/Layout';
import { Inserts } from './pages/Inserts';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inserts />} />
        </Route>
      </Routes>
    </Router>
  );
}
