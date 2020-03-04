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
      case actionType.SUB:
        return prev - value;
      case actionType.DIV:
        return prev / value;
      case actionType.MUL:
        return prev * value;
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