import React from 'react';
import SortingVisualizer from './components/sortingVisualizer/SortingVisualizer';
import { SortingArrayProvider } from './providers/SortingArrayProvider';
import './App.css';
import { AlgoritmeProvider } from './providers/AlgoritmeProvider';

function App() {
  return (
    <div className="App">
      <SortingArrayProvider>
        <AlgoritmeProvider>
          <SortingVisualizer />
        </AlgoritmeProvider>
      </SortingArrayProvider>
    </div>
  );
}

export default App;
