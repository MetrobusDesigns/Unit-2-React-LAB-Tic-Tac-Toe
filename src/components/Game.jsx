import { useState } from 'react'
import Board from './Board'

// Some of the winning lines are provided; finish the rest
const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // TODO: add the remaining winning lines (columns and diagonals)
]

const Game = () => {
  const initialBoard = Array(9).fill(null)
  const [board, setBoard] = useState(initialBoard)
  // TODO: create a boolean state to track whose turn it is (X goes first)

  const calculateWinner = (board) => {
    for (let i = 0; i < WINNING_LINES.length; i++) {
      // destructuring to access the winning lines
      const [a, b, c] = WINNING_LINES[i]
      // TODO: check if board[a], board[b], and board[c] are equal and not empty
    }
    return null
  }

  const winner = calculateWinner(board)

  // index comes from the Board component, the board is numbered 0-8
  const handleClick = (index) => {
    // TODO: ignore the click if the square is filled or there is a winner
    // TODO: update the board at the clicked index with the current player
    // The board is just an array of 9 elements (not a matrix)
    // HINT: remember, to update arrays in react, we need to make a copy of the original array
    // TODO: toggle the player boolean so the next turn switches
    // TODO: increase the move counter by 1
  }

  const resetGame = () => {
    // TODO: reset the board to empty squares
    // TODO: reset the player boolean to X
  }

  return (
    <div className="game">
      {/* TODO: show winner */}
      <div className="winner"></div>

      {/* TODO: show DRAW if there is a draw, figure out a way to track if this is true. (no moves should remain)*/}
      <div className="draw"></div>

      {/* TODO: always show whose turn it is next */}
      <div className="status"></div>

      <Board squares={board} onSquareClick={handleClick} />

      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  )
}

export default Game