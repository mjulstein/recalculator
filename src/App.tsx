import React, {useState} from 'react';
import './styles/App.css';
import Result from './Result';
import Subtract from './buttons/Subtract';
import Add from './buttons/Add';
import Divide from './buttons/Divide';
import Multiply from './buttons/Multiply';
import {actionType} from './actions/historicAction';
import Modulo from './buttons/Modulo';

const App = () => {
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([{action: actionType.EQUAL, value: Number(0)}]);
  const [value, setValue] = useState(0);
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value));

  const buttonProps = {result, setResult, history, setHistory, value, disable: Number.isNaN};
  return (
    <div className="App">
      <header className="App-header">
        <Result result={result} history={history}/>
      </header>
      <main>
        <label htmlFor="input">
          {'Input: '}
          <input type="number" id="input" name="input" value={value} onChange={changeInput}/>
        </label>
        <Subtract {...buttonProps} />
        <Add {...buttonProps}/>
        <Divide {...buttonProps} />
        <Multiply {...buttonProps}/>
        <Modulo {...buttonProps}/>
      </main>
    </div>
  );
};

export default App;
