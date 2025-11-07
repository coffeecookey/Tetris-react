export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// STAGE is going to be a multidimensional array 

// The Array(size) function creates an array of some size.
// Array.from(source, map_function) or array.from(source, callback)
// Array.from function takes something iterable (the source - can be string,set,map) and makes an array
// the map function runs once for every element 

export const createStage = () =>
    // array(stage_height) will create an array of 20 empty slots and the arrow function in place of
    // the callback will be called every time an empty slot is created 
    // the callback will create an object which is an array, of size 12 and fill each element with [0, 'clear']

    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

