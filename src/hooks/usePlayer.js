import {useState} from 'react';
import { RandomTetrominos } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos : {x:0, y:0},
        tetromino: RandomTetrominos().shape,
        collided: false,
    });
    // player is the initial state and setPlayer is the setter or the function that changes the value of player
    // the initial state can be passed into useState 
    // in this case, inidial state is pos : 0,0 collided set to false and tetromino is set to a random tetromino

    return [player];
}