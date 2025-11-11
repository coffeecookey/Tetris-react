import { useState, useEffect } from "react";
import { createStage } from "../gamehelpers";
import Cell from "../components/Cell";

export const useStage = () => {
    const [stage, setStage] = useState({createStage});

    useEffect(()=>{
        const updateStage = prevStage => {

            // first flush the stage ie clear it

            // in gamehelpers, we set cell[1] to 'clear'. we check if the cell is empty by checking if cell[1] is clear.
            // if the cell isn't merged ie it is empty, we return an empty cell ie clear it out 
            // otherwise we return the normal cell

            const newStage = prevStage.map(row=>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            )
        }

            // draw the tetromino
            player.tetromino.array.forEach((row,y) => {
                row.forEach((value,x)=> {
                    if(value !== 0){
                        newStage[y+player.pos.y][x+player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                })

                return newStage;
            });

        setStage(prev=>updateStage(prev))
    },[])

    return [stage, setStage];
}