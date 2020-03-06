import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import operatorType from '../actions/operatorType';

const Add = ({result, setResult, value, history, setHistory, disable}: buttonProps) => {
  const props = {
    onClick: () => {
      setResult(result + value);
      setHistory([...history, {operator: operatorType.ADD, value}]);
    },
    disabled: disable(value)
  };
  return (
    <Button {...props}>
      Add
    </Button>
  );
};

export default Add;