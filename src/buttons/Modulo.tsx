import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import operatorType from '../actions/operatorType';

const Modulo = ({result, setResult, value, history, setHistory, disable}: buttonProps) => {
  const props = {
    onClick: () => {
      setResult(result % value);
      setHistory([...history, {operator: operatorType.MODULO, value}]);
    },
    disabled: disable(value) || !Number.isInteger(result) || !Number.isInteger(value)
  };
  return (
    <Button {...props}>
      Modulo
    </Button>
  );
};

export default Modulo;