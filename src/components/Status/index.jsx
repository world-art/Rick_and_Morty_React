import React, { useMemo } from 'react';
import { StyledAliveIndicator, StyledDeadIndicator, StyledStatus, StyledUnknownIndicator } from './style';

export const Status = ({statusPerson,species}) => {
  const IndicatorStatus = useMemo(() => {
    switch (statusPerson) {
      case 'Alive':
        return StyledAliveIndicator
      case 'Dead':
        return StyledDeadIndicator
      default:
        return StyledUnknownIndicator
    }
  }, [statusPerson])
  return (
    <StyledStatus>
      <IndicatorStatus/>{statusPerson} - {species}
    </StyledStatus>
  )
}