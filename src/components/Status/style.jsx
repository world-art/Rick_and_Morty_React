import styled from 'styled-components';

export const StyledAliveIndicator = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
`;
export const StyledDeadIndicator = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(214, 61, 46);
  border-radius: 50%;
`;

export const StyledUnknownIndicator = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(158, 158, 158);
  border-radius: 50%;
`;

export const StyledStatus = styled.span`
    display: flex;
    align-items: center;
    text-transform: capitalize;
`