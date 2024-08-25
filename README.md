# Sorting Algorithm Visualizer

Welcome to the **Sorting Algorithm Visualizer**! This project is a web-based application that provides visual demonstrations of various sorting algorithms. It is designed to help users understand how different sorting algorithms work through animated visualizations.

## Features

- **Visualization of 5 Sorting Algorithms**: The application includes visualizations for the following sorting algorithms:
  - **Selection Sort**
  - **Insertion Sort**
  - **Merge Sort**
  - **Quick Sort**
  - **Bubble Sort**
  
- **Interactive User Interface**: Users can select any of the provided algorithms, adjust the speed of the visualization, and input custom arrays to see how the algorithms sort them in real-time.

- **Customizable Parameters**: 
  - Change the size of the array.
  - Modify the speed of the sorting animation.

## Live Demo

Check out the live demo of the Sorting Algorithm Visualizer [here](https://edens-angel.github.io/sorting-visualizer/).

## How It Works

The visualizer is built using **React.js**. The core functionality involves generating an array of random numbers, which are then sorted using the selected algorithm. The process of sorting is animated step by step, providing a clear visualization of the algorithm's behavior.

### Algorithms Implemented

1. **Selection Sort**: Repeatedly selects the smallest (or largest) element from the unsorted portion and swaps it with the first unsorted element.

2. **Insertion Sort**: Builds the final sorted array one element at a time by repeatedly picking the next element and inserting it into the correct position.

3. **Merge Sort**: Divides the array into halves, sorts them, and then merges the sorted halves.

4. **Quick Sort**: Picks a pivot element, partitions the array around the pivot, and recursively sorts the subarrays.

5. **Bubble Sort**: Repeatedly swaps adjacent elements if they are in the wrong order.

## Getting Started

### Prerequisites

To run the project locally, you need to have the following installed:

- **Node.js** (v20 or higher)
- **npm** (v10 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/edens-angel/sorting-visualizer.git
   cd sorting-visualizer
