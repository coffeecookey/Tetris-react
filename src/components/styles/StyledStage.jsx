import styled from "styled-components";
// styled.div returns a React component containing a div with all the styles we put in the back ticks 
// styled.div is called a tagged template literal
// ${ ... } inside the template is JavaScript interpolation. 
// In styled-components, that interpolation can be a value (string/number), or
// a function that receives the component props and returns a value.


export const StyledStage = styled.div `
    display: grid; 
    grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #262626ff;
`;

// grid-template-rows defines num of rows and size of each row.
// repeat (<count>, <track-size>) so num of rows = height = 20 and track size is the length
// calc is a CSS math function to add/subtract/multiply/divide
// calc determines the height of each row in this case
// grid-template-columns: repeat(4, 100px); means 4 columns of 100px
// fr = 1 fraction repeat(4, 1fr) would mean 4 cols of 1/4 size