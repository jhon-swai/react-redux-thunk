import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import buyCakes from '../hooks/cakes/action';

function ReduxHooksContainer() {
  const numberOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>React Redux with Redux Hooks</h1>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p>Number of Cakes - {numberOfCakes} </p>
      <button type="button" onClick={() => dispatch(buyCakes())}>
        Buy Cakes
      </button>
    </div>
  );
}

export default ReduxHooksContainer;
