import React from "react";
import Cell from "./Cell";
import Stage from "./Stage";
import Startbutton from "./Startbutton";
import Display from "./Display"
import { createStage } from "../gamehelpers";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

// this is the main Tetrix page, containing the main tetris screen, score, levels and rows
const Tetris = () =>{

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()}/>

                {/* Aside is the component for the side bar on the main screen */}
                <aside>
                    <div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Level"/>
                    </div>
                </aside>

                <Startbutton/>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;