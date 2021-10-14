import React from 'react';

function Square (props){
  
    return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state={
      squares:Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i){
    const squares=this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    } 
    squares[i]=this.state.xIsNext?'X':'O';
    this.setState({
      squares:squares,
      xIsNext: !this.state.xIsNext,
    });

  }

  renderSquare(i) {
    return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }


    return (
      <>

      <div >
        <div className="status" style={{ marginTop: `50px` }} >{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
     </>
    );
   
  }
}

class Game extends React.Component {
  render() {

    return (

        <div className="container servicios">
 
        <div className="row">

            <div className="col-lg-3">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Player 1</title>
                    <rect width="100%" height="100%" fill="#477" />
                    <text x="50%" y="50%" fill="#111" dy=".23em">X</text>
                </svg>
                <h2>Jugador 1</h2>
                <p>El jugador 1 inicia con la X en todas las partidas</p>
                <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
            </div>
            
            <div className="col-lg-6">
                <div className="game text-center">
                    <div className="game-board">
                        <Board />
                    </div>
                  <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                  </div>
                </div>
            </div>
            <div className="col-lg-3 justify-content-center">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                    <title>Player 2</title>
                    <rect width="100%" height="100%" fill="#999" />
                    <text x="50%" y="50%" fill="#111" dy=".3em">0</text>
                </svg>
                <h2>Jugador 2</h2>
                <p>El jugador 2 será el siguiente en el turno y siempre será el O.</p>
                <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
            </div>
        </div>
     </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================
export default Game;