import styled from 'styled-components';

// styled components is a js library that lets users write css in tagged template literal
// ie by using backticks ``

// props.type = 0 means the cell is empty
// the border is actually what makes up the color and look of the tetrominos, if the border is
// changed to 12 px or 2 px solid you can watch the blocks become thinner

export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0) ? '0px solid' : '15px solid'};
    border-bottom-color: rgba(${props => props.color},0.1); 
    border-right-color: rgba(${props => props.color},1); 
    border-top-color: rgba(${props => props.color},1); 
    border-left-color: rgba(${props => props.color},0.3); 
`