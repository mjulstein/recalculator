import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import operatorType from '../actions/operatorType';

const Subtract = ({result, setResult, value, history, setHistory, disable}: buttonProps) => {
  const props = {
    onClick: () => {
      setResult(result - value);
      setHistory([...history, {operator: operatorType.SUBTRACT, value}]);
    },
    disabled: disable(value)
  };
  return (
    <Button {...props}>
      Subtract
    </Button>
  );
};

export default Subtract;