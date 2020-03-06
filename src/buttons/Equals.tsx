import React from 'react';
import buttonProps from './buttonProps';
import Button from './Button';
import reduceHistory from '../func/reduceHistory';

const Equals = (
  {
    setResult,
    value,
    history,
    disable
  }: buttonProps) => {
  const props = {
    onClick: () => {
      setResult(reduceHistory(history));
    },
    disabled: !history.length || disable(value)
  };

  return (
    <Button {...props}>
      Divide
    </Button>
  );
};

export default Equals;