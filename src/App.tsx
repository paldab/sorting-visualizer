import React from 'react';
import SortingVisualizer from './components/sortingVisualizer/SortingVisualizer';
import { SortingArrayProvider } from './providers/SortingArrayProvider';
import './App.css';

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
