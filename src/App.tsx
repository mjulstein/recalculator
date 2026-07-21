import { useState } from 'react';
import styles from './styles/App.module.css';
import { Result } from './Result';
import { HistoricAction } from './actions/HistoricAction';
import { Add, Divide, Modulo, Multiply, Trim, Subtract } from './buttons';
import { Button } from './buttons/Button';
import { useVisualViewport } from './hooks/useVisualViewport';

export const App = () => {
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState<HistoricAction[]>([{ operator: 'EQUAL', value: 0 }]);
  const [intPart, setIntPart] = useState('0');
  const [decPart, setDecPart] = useState('');
  const [inDecimalMode, setInDecimalMode] = useState(false);

  useVisualViewport();

  const handleDigit = (d: string) => {
    if (inDecimalMode) {
      setDecPart((prev) => prev + d);
    } else {
      setIntPart((prev) => (prev === '0' ? d : prev + d));
    }
  };

  const handleDecimal = () => setInDecimalMode((prev) => !prev);

  const handleBackspace = () => {
    if (inDecimalMode) {
      if (decPart.length > 0) {
        setDecPart((prev) => prev.slice(0, -1));
      } else {
        setInDecimalMode(false);
      }
    } else {
      setIntPart((prev) => (prev.length <= 1 ? '0' : prev.slice(0, -1)));
    }
  };

  const decValue = decPart ? parseInt(decPart) / Math.pow(10, decPart.length) : 0;
  const value = (parseInt(intPart) || 0) + decValue;
  const decimalLength = decPart.length;
  const displayStr = intPart + (inDecimalMode || decPart ? '.' + decPart : '');

  const fillFromResult = () => {
    const str = String(result);
    const [int, dec = ''] = str.split('.');
    setIntPart(int);
    setDecPart(dec);
    setInDecimalMode(false);
  };

  const buttonProps = { result, setResult, history, setHistory, value, disable: Number.isNaN, decimalLength };

  return (
    <div className={styles.app}>
      <header className={styles.display}>
        <Result result={result} history={history} onFillInput={fillFromResult} />
        <div
          className={[styles.inputDisplay, inDecimalMode ? styles.inputDisplayDecimalMode : undefined]
            .filter(Boolean)
            .join(' ')}
        >
          {displayStr}
        </div>
      </header>
      <main className={styles.controls}>
        <div className={styles.buttonGrid}>
          <Button variant="numeric" onClick={() => handleDigit('7')}>7</Button>
          <Button variant="numeric" onClick={() => handleDigit('8')}>8</Button>
          <Button variant="numeric" onClick={() => handleDigit('9')}>9</Button>
          <Divide {...buttonProps} />

          <Button variant="numeric" onClick={() => handleDigit('4')}>4</Button>
          <Button variant="numeric" onClick={() => handleDigit('5')}>5</Button>
          <Button variant="numeric" onClick={() => handleDigit('6')}>6</Button>
          <Multiply {...buttonProps} />

          <Button variant="numeric" onClick={() => handleDigit('1')}>1</Button>
          <Button variant="numeric" onClick={() => handleDigit('2')}>2</Button>
          <Button variant="numeric" onClick={() => handleDigit('3')}>3</Button>
          <Subtract {...buttonProps} />

          <Button variant="numeric" onClick={handleDecimal}>,</Button>
          <Button variant="numeric" onClick={() => handleDigit('0')}>0</Button>
          <Button variant="numeric" onClick={handleBackspace}>⌫</Button>
          <Add {...buttonProps} />

          <div className={styles.wideCell}><Modulo {...buttonProps} /></div>
          <div className={styles.wideCell}><Trim {...buttonProps} /></div>
        </div>
      </main>
    </div>
  );
};
