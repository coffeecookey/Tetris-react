import React from "react";
import Cell from "./Cell";
import Stage from "./Stage";
import Startbutton from "./Startbutton";
import Display from "./Display"
import { createStage } from "../gamehelpers";

// this is the main Tetrix page, containing the main tetris screen, score, levels and rows
const Tetris = () =>{

    return (
        <div>
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

        </div>
    )
}

export default Tetris;