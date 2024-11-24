import { BrowserRouter, Routes, Route } from 'react-router'

import Index from './components/Index'
import ShuffleTest from './components/ShuffleTest.tsx'
import DeepStateUpdatesTest from './components/DeepStateUpdatesTest.tsx'
import MapUpdatesTest from './components/MapUpdatesTest.tsx'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shuffle" element={<ShuffleTest />} />
        <Route path="/deep-state-updates" element={<DeepStateUpdatesTest />} />
        <Route path="/map-updates" element={<MapUpdatesTest />} />
      </Routes>
    </BrowserRouter>
  );
}