import React from 'react';
import {actionType, historicAction} from './actions/historicAction';

interface Props {
  result: number,
  history: historicAction[]
}

function Result({result, history}: Props) {
  const currentTotal = history.reduce((prev, curr) => {
    const {action, value} = curr;
    switch (action) {
      case actionType.ADD:
        return prev + value;
      case actionType.SUBTRACT:
        return prev - value;
      case actionType.DIVIDE:
        return prev / value;
      case actionType.MULTIPLY:
        return prev * value;
      case actionType.MODULO:
        return prev % value;
      default:
        return prev;
    }
  }, 0);

  return (
    <section>
      <article>
        <label htmlFor="historicTotal">
          {'Historic Total: '}
        </label>
        <span>
          {currentTotal}
        </span>
      </article>
      <article>
        <label>
          {'Progressive Total: '}
        </label>
        <span>
          {result}
        </span>
      </article>
    </section>
  );
}

export default Result;