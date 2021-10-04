import styled from 'styled-components';

export const StyledCharacterSection = styled.section`
margin-left: 10px;
`

export const StyledCharacterBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  column-gap: 10px;
`;

export const StyledPaginationBlock = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
`

export const StyledPaginationButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 20px;
    display: flex;
    align-items: center;
`

export const StyledPaginationNextButton = styled.i`
    margin-left: 5px;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`
export const StyledPaginationPrevButton = styled.i`
    margin-right: 5px;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`