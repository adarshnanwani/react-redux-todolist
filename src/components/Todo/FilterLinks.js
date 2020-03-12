import React from 'react';
import { connect } from 'react-redux';
import { filters } from '../../actions/actionTypes';
import { setFilter } from '../../actions/index';

const Filters = ({ currentFilter, setFilterHandler }) => {
  const clickHandler = e => {
    setFilterHandler(e.target.dataset.filter);
  };
  return (
    <h3>
      <button data-filter={filters.SHOW_ALL} onClick={clickHandler}>
        {filters.SHOW_ALL}
      </button>
      <button data-filter={filters.SHOW_ACTIVE} onClick={clickHandler}>
        {filters.SHOW_ACTIVE}
      </button>
      <button data-filter={filters.SHOW_COMPLETED} onClick={clickHandler}>
        {filters.SHOW_COMPLETED}
      </button>
    </h3>
  );
};

const mapStateToProps = state => {
  return {
    currentFilter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterHandler: filter => dispatch(setFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
