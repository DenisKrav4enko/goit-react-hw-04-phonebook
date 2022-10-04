import React from 'react';
import PropTypes from 'prop-types';
import {
  WrapperFilter,
  Wrapper,
  FilterTitle,
} from './Styled.Components';

const Filter = props => {
  const {
    filter,
    setFilter,
  } = props;

  return (
    <Wrapper>
      <FilterTitle>
        Find contacts by name
      </FilterTitle>
      <WrapperFilter
        value={filter}
        onChange={event => setFilter(event.currentTarget.value)}
      />
    </Wrapper>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default Filter;
