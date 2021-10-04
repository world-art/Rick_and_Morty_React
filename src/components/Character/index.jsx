import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Status } from '../Status';
import {
  StyledCharacterBlock,
  StyledCharacterSection,
  StyledPaginationBlock,
  StyledPaginationButton,
  StyledPaginationNextButton,
  StyledPaginationPrevButton,
} from './style';
import { Card } from 'react-bootstrap';
import { getAllCharacter } from '../../redux/character/action';
import { PopUp } from '../Modal';

export const Character = () => {
  const { character, info } = useSelector((state) => state.character);
  const [modalShow, setModalShow] = useState({
    id: '',
    show: false,
  });
  const dispatch = useDispatch();

  const handleNextButton = () => {
    const next = info.next.match(/[^\/]*$/);
    dispatch(getAllCharacter(next));
  };
  const handlePrevButton = () => {
    const prev = info.prev.match(/[^\/]*$/);
    dispatch(getAllCharacter(prev));
  };

  return (
    <StyledCharacterSection>
      <StyledCharacterBlock>
        {!!character.length
          ? character.map((item) => (
              <Card
                style={{ width: '18rem', cursor: 'pointer' }}
                key={item.id}
                onClick={() => setModalShow({ id: item.id, show: true })}
              >
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <Status statusPerson={item.status} species={item.species} />
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          : 'There is nothing here'}
      </StyledCharacterBlock>
      <StyledPaginationBlock>
        {!!character.length && info.prev && (
          <StyledPaginationButton onClick={handlePrevButton}>
            <StyledPaginationPrevButton />
            Prev
          </StyledPaginationButton>
        )}
        {!!character.length && info.next && (
          <StyledPaginationButton onClick={handleNextButton}>
            Next <StyledPaginationNextButton />
          </StyledPaginationButton>
        )}
      </StyledPaginationBlock>
      <PopUp show={modalShow.show} id={modalShow.id} onHide={() => setModalShow({ ...modalShow, show: false })} />
    </StyledCharacterSection>
  );
};
