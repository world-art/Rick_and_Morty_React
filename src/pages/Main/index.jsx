import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/Loader';
import { getAllCharacter } from '../../redux/character/action';
import {
  StyledMainPage,
} from './style';
import { Filter } from '../../components/Filter';
import { Character } from '../../components/Character';
  
export const Main = () => {
  const { isLoading } = useSelector((state) => state.character);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCharacter('?page=1'));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledMainPage>
          <Filter />
          <Character />
        </StyledMainPage>
      )}
    </>
  );
};
