import React from 'react';
import {historicAction} from './actions/historicAction';
import reduceHistory from './func/reduceHistory';

interface Props {
  result: number,
  history: historicAction[]
}

function Result({result, history}: Props) {
  const currentTotal = reduceHistory(history);

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