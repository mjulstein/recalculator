import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import {actionType} from '../actions/historicAction';

const Add = ({result, setResult, value, history, setHistory, disable}: buttonProps) => {
  const props = {
    onClick: () => {
      setResult(result + value);
      setHistory([...history, {action: actionType.ADD, value}]);
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