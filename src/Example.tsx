import React from 'react';

interface Props {
  count: number;
  setCount: (val: number) => void;
}

export const Example = ({ count, setCount }: Props) => {
  const click = () => setCount(count + 1);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};
