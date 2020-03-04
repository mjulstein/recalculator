import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import {actionType} from '../actions/historicAction';

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
      setHistory([...history, {action: actionType.MUL, value}]);
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