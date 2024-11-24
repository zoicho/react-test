import { BrowserRouter, Routes, Route } from 'react-router'

import Index from './components/Index'
import ShuffleTest from './components/ShuffleTest.tsx'
import DeepStateUpdatesTest from './components/DeepStateUpdatesTest.tsx'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shuffle" element={<ShuffleTest />} />
        <Route path="/deep-state-updates" element={<DeepStateUpdatesTest />} />
      </Routes>
    </BrowserRouter>
  );
}