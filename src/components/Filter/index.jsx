import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  StyledFilterBlock,
  StyledFilterGender,
  StyledFilterName,
  StyledFilterSpecies,
  StyledFilterStatus,
  StyledFilterType,
} from './style';
import { useDispatch } from 'react-redux';
import { getAllCharacter } from '../../redux/character/action';

export const Filter = () => {
  const form = useRef(null);
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form.current).entries());
    const filteredData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== ''));
    const getOwnPropertyNames = Object.getOwnPropertyNames(filteredData);
    const query = getOwnPropertyNames
      .map((key, index) => {
        if (index === 0) return `?${key}=${filteredData[key]}`;
        return `&${key}=${filteredData[key]}`;
      })
      .join('');
    dispatch(getAllCharacter(query));
  };
  const handleResetButton = (e) => {
    e.preventDefault();
    form.current.reset();
    dispatch(getAllCharacter('?page=1'));
  };

  return (
    <StyledFilterBlock>
      <Form onSubmit={(e) => handleSubmitForm(e)} ref={form}>
        <StyledFilterName>
          <Form.Group className='mb-3' controlId='form.FilterName'>
            <Form.Label>Name filter</Form.Label>
            <Form.Control type='text' name='name' placeholder='Enter name' />
          </Form.Group>
        </StyledFilterName>
        <StyledFilterStatus>
          <Form.Group className='mb-3' controlId='form.FilterStatus'>
            <Form.Label>Status filter</Form.Label>
            <Form.Select size='sm' name='status'>
              <option defaultValue value=''>
                All
              </option>
              <option value='alive'>Alive</option>
              <option value='dead'>Dead</option>
              <option value='unknown'>Unknown</option>
            </Form.Select>
          </Form.Group>
        </StyledFilterStatus>
        <StyledFilterSpecies>
          <Form.Group className='mb-3' controlId='form.FilterSpecies'>
            <Form.Label>Species filter</Form.Label>
            <Form.Control type='text' name='species' placeholder='Enter species' />
          </Form.Group>
        </StyledFilterSpecies>
        <StyledFilterType>
          <Form.Group className='mb-3' controlId='form.FilterType'>
            <Form.Label>Type filter</Form.Label>
            <Form.Control type='text' name='type' placeholder='Enter type' />
          </Form.Group>
        </StyledFilterType>
        <StyledFilterGender>
          <Form.Group className='mb-3' controlId='form.FilterGender'>
            <Form.Label>Gender filter</Form.Label>
            <Form.Select size='sm' name='gender'>
              <option defaultValue value=''>
                All
              </option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
              <option value='genderless'>Genderless</option>
              <option value='unknown'>Unknown</option>
            </Form.Select>
          </Form.Group>
        </StyledFilterGender>
        <Button type='submit' variant='success'>
          Apply
        </Button>
        <Button type='button' variant='secondary' onClick={handleResetButton}>
          Reset
        </Button>
      </Form>
    </StyledFilterBlock>
  );
};
