import styled from 'styled-components';

// styled components is a js library that lets users write css in tagged template literal
// ie by using backticks ``

//props.type = 0 means the cell is empty
export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0) ? '0px solid' : '4px solid'};
    border-bottom-color: rgba(${props => props.color},0.1); 
    border-right-color: rgba(${props => props.color},1); 
    border-top-color: rgba(${props => props.color},1); 
    border-left-color: rgba(${props => props.color},0.3); 
`