import React from "react";
import { TETROMINOS } from "../tetrominos";
import { StyledCell } from "./styles/styledCell";


const Cell = ({ type }) => (
    <div>
        {/* TETROMINOS[type] means it'll grab the specific tetromino and use its color */}
        <StyledCell type={type} color = {TETROMINOS[type].color}/>
    </div>
);

export default Cell;