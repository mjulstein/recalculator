import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import operatorType from '../actions/operatorType';

const Multiply = (
  {
    result,
    setResult,
    value,
    history,
    setHistory,
    disable
  }: buttonProps) => {
  const props = {
    onClick: () => {
      setResult(result * value);
      setHistory([...history, {operator: operatorType.MULTIPLY, value}]);
    },
    disabled: disable(value)
  };
  return (
    <Button {...props}>
      Multiply
    </Button>
  );
};

export default Multiply;