
// Tetrominos are the shapes used in tetris, made up of four blocks (Hence, tetra)
// Here, we are making an object called Tetrominos

//0 = nothing, this is our clean cell, which means it's empty and no tetrominos is present there

//apart from this, there are 7 different tetrominos:
// I  O  T  J  L  S  Z

export const TETROMINOS = {
    0: { shape : [[0]], color:'0,0,0'},
    I:{
        shape: [
            [0,'I',0,0], //.  |
            [0,'I',0,0], //.  |
            [0,'I',0,0], //.  |
            [0,'I',0,0]  //.  |
        ],
        color: '122,255,140'
    },
        J:{
        shape: [
            [0,'J',0],  //.  |
            [0,'J',0],  //.  |
            ['J','J',0] // __|
        ],
        color: '253,156,149'
    },
        L:{
        shape: [
            [0,'L',0],   //.  |
            [0,'L',0],   //.  |
            [0,'L','L'], //.  |__
        ],
        color: '132,207,251'
    },
            O:{
        shape: [
            ['O','O'],   
            ['O','O'] 
        ],
        color: '132,139,251'
    },
        S:{
        shape: [
            [0,'S','S'], 
            ['S','S',0]
        ],
        color: '251,132,193'
    },
            T:{
        shape: [
            [0,0,0], 
            ['T','T','T'],
            [0,'T',0]
        ],
        color: '251,233,132'
    },
                Z:{
        shape: [
            ['Z','Z',0], 
            [0,'Z','Z']
        ],
        color: '255,146,70'
    }
}

// This is the function that will generate random tetrominos 
export const RandomTetrominos = () =>{
    const Tetrominos = 'IJLOSTZ';
    // Math.random() is a method that returns a random number between 0 (inclusive) and 1 but never 1.
    const randTetromino = Tetrominos[Math.floor(Math.random() * Tetrominos.length)];

    //the goal is to pick and return a random letter from the string
    return TETROMINOS[randTetromino];

}