import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getEpisodeService } from '../../service/episode';
import { Status } from '../Status';

export const PopUp = (props) => {
  const { character } = useSelector((state) => state.character);
  const [data, dataSet] = useState(null);
  const person = character.find((character) => character.id === props.id);
  useEffect(() => {
    if (person === undefined) return;
    dataSet(null);
    const fetchEpisode = async () => {
      const data = await getEpisodeService(person?.episode?.[0].match(/[^\/]*$/)[0]);
      dataSet(data);
    };
    return fetchEpisode();
  }, [person]);

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{person?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          <Status statusPerson={person?.status} species={person?.species} />
        </h4>
        <img src={person?.image} alt='avatar' />
        {person?.location && <h4 style={{ marginTop: '10px' }}>Localion: {person.location.name}</h4>}
        {person?.origin && <h4 style={{ marginTop: '10px' }}>Origin: {person.origin.name}</h4>}
        {!!person?.type.length && <h4 style={{ marginTop: '10px' }}>Type: {person.type}</h4>}
        {person?.gender && <h4 style={{ marginTop: '10px' }}>Gender: {person.gender}</h4>}
        {data && (
          <h4 style={{ marginTop: '10px', color: 'green' }}>
            First seen: {data.name}, Episode: {data.episode}
          </h4>
        )}
      </Modal.Body>
    </Modal>
  );
};
