import React from 'react';
import './App.css';
import SortingVisualizer from './components/sortingVisualizer/SortingVisualizer';
import { SortingArrayProvider } from './providers/SortingArrayProvider';

function App() {
  return (
    <div className="App">
      <SortingArrayProvider>
        <SortingVisualizer />
      </SortingArrayProvider>
    </div>
  );
}

export default App;
