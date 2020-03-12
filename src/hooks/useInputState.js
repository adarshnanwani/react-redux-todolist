import { useState } from 'react';

const useInputState = (initialValue = '') => {
  const [state, setState] = useState(initialValue);
  const updateState = e => {
    setState(e.target.value);
  };
  const resetState = e => {
    setState('');
  };
  return [state, updateState, resetState, setState];
};

export default useInputState;
