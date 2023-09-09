import Card from "../card/card";
import { useState } from "react";
import isWinner from "../WinnerHelper/Helper";
import './Grid.css'
// import{TostContainer,toast} from 'react-toastify'


function Grid({ numberOfCard }) {
    const [bord, setBord] = useState(Array(numberOfCard).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null)
    function play(index) {
        if (turn == true) {
            bord[index] = 'O'
        }
        else {
            bord[index] = 'X'
        }
        const win = isWinner(bord, turn ? "O" : "X")
        if (win) {
            setWinner(win)
        }
        setBord([...bord])
        setTurn(!turn)
    }
    function reset(){
        setTurn(turn);
        setWinner(null);
        setBord(Array(numberOfCard).fill(""));
       

    }
    return (
        <div className="TurnWrapper">
            {
                winner &&
                <>
                    (
                    <h1 className="winner">winner is {winner}</h1>
                    <button onClick={reset}>reset game!</button>
                    )
                </>
            }
            <h1 className="heading" >Current turn: {(turn) ? "O" : "X"}</h1>
            <div className="grid">


                {bord.map((el, idx) => <Card key={idx} gameEnd={winner?true:false} onPlay={play} player={el} index={idx} />)}
            </div>
        </div>
    )





}
export default Grid;