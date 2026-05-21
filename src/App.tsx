import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout, ScrollToTop } from './components/Layout';
import { Home } from './pages/Home';
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
