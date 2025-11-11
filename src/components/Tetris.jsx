import React, { useState } from "react";
import Cell from "./Cell";
import Stage from "./Stage";
import Startbutton from "./Startbutton";
import Display from "./Display"

//importing hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";
import { TETROMINOS } from "../tetrominos";
import { createStage } from "../gamehelpers";

// this is the main Tetris page, containing the main tetris screen, score, levels and rows
const Tetris = () =>{
        
    // dropTime refers to the time taken by the tetromino to drop, it will decrease with harder levels

        const [dropTime, setDropTime] = useState(null);
        const [gameOver, setgameOver] = useState(false);
        const [player, updatePlayerPos, resetPlayer] = usePlayer();
        const [stage, setStage] = useStage(player);

        // creating a function for player movement: it will take in direction as a parameter
        const movePlayer = dir => {
            updatePlayerPos({x:dir,y:0})
        };

        const startGame = () =>{
            // reset everything
            setStage(createStage());
            resetPlayer();
        };

        const drop = () => {
            // to make the player's tetromino go down faster
            updatePlayerPos({ x:0, y:1, collided: false });

        };

        const dropPlayer = () => {};

        // takes the keyboard input and calls movePlayer 
        const move = ({ keycode }) => {

            // only if game is not over, this code should execute
            if(!gameOver) {

                //key code 37 refers to the left arrow key
                // i used this website to get the keycodes : https://www.toptal.com/developers/keycode
                if(keycode===37){
                    movePlayer(-1);
                }
                else if(keycode === 39){
                    movePlayer(1);
                }
                
                //to get the tetris to move down
                if(keycode === 40) {
                    dropPlayer();
                }
            }
        }

    return (

        // HTML tabIndex controls whether an element can receive keyboard focus
        // tabIndex="0" makes this <div> focusable via the Tab key!
        // Only focused elements can receive keyboard events like onKeyDown

        // onKeyDown is the React event prop for keyboard key presses. 
        // It must receive a function so here, it receives an arrow function.
        // When a key is pressed, React creates a SyntheticKeyboardEvent object and passes it as the first argument.
        // The arrow function executes with that argument (e).

        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={createStage()}/>

                {/* Aside is the component for the side bar on the main screen */}
                <aside>
                    {gameOver ? 
                    // if game is over then display this text
                    (<Display gameOver={gameOver} text="Game Over"/>) : 
                    // else display the score, rows, levels etc.
                    (
                    <div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Level"/>
                        <Startbutton onClick={startGame}/>
                    </div>
                    )};
                </aside>

                
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;