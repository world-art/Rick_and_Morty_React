import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #2a2f31;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 45%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Loader = () => {
  return <StyledLoader />;
};
