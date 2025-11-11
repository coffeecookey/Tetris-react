import {useCallback, useState} from 'react';
import { RandomTetrominos } from '../tetrominos';
import { STAGE_WIDTH } from '../gamehelpers';
import { TETROMINOS } from '../tetrominos';


export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos : {x:0, y:0},
        tetromino: RandomTetrominos().shape,
        collided: false,
    });
    // player is the initial state and setPlayer is the setter or the function that changes the value of player
    // the initial state can be passed into useState 
    // in this case, inidial state is pos : 0,0 collided set to false and tetromino is set to a random tetromino

    
    // ...prev is the object spread operator. It copies all the values from the previous state to this new one.
    //  this function takes the values of x,y (position) collided and gives updated position and collided values
    // ie it moves the player by x and y 
    const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
        ...prev,
        // their code: pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
        pos: { x: (prev.pos.x + x), y: (prev.pos.y + y) },
        collided,
    }));
    };


    const resetPlayer = useCallback( () => {

        // tetromino will start from the top, somewhere in the middle of the stage
        setPlayer({
            pos: {x:STAGE_WIDTH/2 - 2,y:0},
            tetromino: RandomTetrominos().shape,
            collided: false
        })
    }, [])

    return [player, updatePlayerPos,resetPlayer];
}