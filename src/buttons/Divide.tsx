import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import operatorType from '../actions/operatorType';

const Divide = (
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
      setResult(result / value);
      setHistory([...history, {operator: operatorType.DIVIDE, value}]);
    },
    disabled: value === 0 || disable(value)
  };

  return (
    <Button {...props}>
      Divide
    </Button>
  );
};

export default Divide;