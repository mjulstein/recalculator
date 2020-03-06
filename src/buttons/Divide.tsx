import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import {actionType} from '../actions/historicAction';

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
      setHistory([...history, {action: actionType.DIVIDE, value}]);
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