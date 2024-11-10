import React, { useState } from 'react';
import { FibonacciSequenceService } from '../services/fibonacci-sequence.service.ts';

const fibSequence = new FibonacciSequenceService();
const DEFAULT_GRID_SIZE = 10;
const FIB_SEQUENCE_LENGTH = 5;
enum Colors {
  Default = '#1A1A1A',
  Yellow = '#F3C92FFF',
  Green = '#4BEC93FF',
}

type Cell = {
  counter: number;
  color: Colors;
};
type Grid = Cell[][];

type Props = {
  gridSize?: number;
  incrementHits: () => void;
  incrementClicks: () => void;
};
const FibGrid = ({
  gridSize = DEFAULT_GRID_SIZE,
  incrementHits,
  incrementClicks,
}: Props) => {
  const [grid, setGrid] = useState<Grid>(
    Array.from({ length: gridSize }).map(() =>
      Array(gridSize).fill({ counter: 0, color: Colors.Default }),
    ),
  );

  const checkFibonacciSequences = (grid: Grid) => {
    const sequences = [];

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col <= gridSize - FIB_SEQUENCE_LENGTH; col++) {
        const counters = grid[row]
          .slice(col, col + 4)
          .map((cell) => cell.counter);
        if (counters.every((count) => fibSequence.isFibonacci(count))) {
          sequences.push({ type: 'row', row, startCol: col });
        }
      }
    }

    for (let col = 0; col < gridSize; col++) {
      for (let row = 0; row <= gridSize - FIB_SEQUENCE_LENGTH; row++) {
        const counters = grid
          .slice(row, row + 4)
          .map((row) => row[col].counter);
        if (counters.every((count: number) => fibSequence.isFibonacci(count))) {
          sequences.push({ type: 'col', col, startRow: row });
        }
      }
    }

    return sequences;
  };

  const resetGridColor = (localGrid: Grid) => {
    const updatedGrid: Grid = localGrid.map((row) =>
      row.map((cell) => ({ ...cell, color: Colors.Default })),
    );
    setGrid(updatedGrid);
    return updatedGrid;
  };

  const incrementNeighborsStep = (
    clickRowIndex: number,
    clickColIndex: number,
  ) => {
    const newGrid: Grid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (rowIndex === clickRowIndex || colIndex === clickColIndex) {
          return { counter: cell.counter + 1, color: Colors.Yellow };
        }
        return cell;
      }),
    );
    setGrid(newGrid);
    return newGrid;
  };
  const handleFibonacciCheckStep = (grid: Grid) => {
    const sequences = checkFibonacciSequences(grid);
    if (sequences.length > 0) {
      incrementHits();
      const finalGrid: Grid = grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const inSequence = sequences.some(
            (seq) =>
              (seq.type === 'row' &&
                seq.row === rowIndex &&
                colIndex >= seq.startCol &&
                colIndex < seq.startCol + FIB_SEQUENCE_LENGTH) ||
              (seq.type === 'col' &&
                seq.col === colIndex &&
                rowIndex >= seq.startRow &&
                rowIndex < seq.startRow + FIB_SEQUENCE_LENGTH),
          );
          return inSequence ? { counter: 0, color: Colors.Green } : cell;
        }),
      );
      setGrid(finalGrid);

      setTimeout(() => resetGridColor(finalGrid), 1000);
    }
  };

  const stepFunction = (row: number, col: number) => {
    const step1Grid = incrementNeighborsStep(row, col);
    setTimeout(() => {
      const step2Grid = resetGridColor(step1Grid);
      handleFibonacciCheckStep(step2Grid);
    }, 1000);
  };

  const handleClick = (row: number, col: number) => {
    incrementClicks();
    stepFunction(row, col);
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gap: '1px',
        }}>
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex * 10 + colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              style={{
                backgroundColor: cell.color,
                color: 'white',
                height: '40px',
                fontSize: '11px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}>
              {cell.counter ? cell.counter : ''}
            </button>
          )),
        )}
      </div>
    </React.Fragment>
  );
};

export default FibGrid;
