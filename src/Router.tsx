import { BrowserRouter, Routes, Route } from 'react-router'

import Index from './components/Index'
import ShuffleTest from './components/ShuffleTest.tsx'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shuffle" element={<ShuffleTest />} />
      </Routes>
    </BrowserRouter>
  );
}