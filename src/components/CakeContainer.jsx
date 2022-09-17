import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // ES6

import { buyCakes } from '../hooks/index';

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p>The number of Cakes -{numOfCakes}</p>
      <button type="button" onClick={() => buyCake()}>
        Buy Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.numOfCakes,
});
const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCakes()),
});

// props
CakeContainer.propTypes = {
  numOfCakes: PropTypes.number.isRequired,
  buyCake: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
