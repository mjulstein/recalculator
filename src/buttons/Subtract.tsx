import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import {actionType} from '../actions/historicAction';

const Subtract = ({result, setResult, value, history, setHistory, disable}: buttonProps) => {
  const props = {
    onClick: () => {
      setResult(result - value);
      setHistory([...history, {action: actionType.SUB, value}]);
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