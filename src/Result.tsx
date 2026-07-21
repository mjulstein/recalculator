import styles from './styles/Result.module.css';
import { HistoricAction } from './actions/HistoricAction';

const OP_SYMBOL: Record<string, string> = {
  ADD: '+',
  SUBTRACT: '−',
  MULTIPLY: '×',
  DIVIDE: '÷',
  MODULO: '%',
  TRIM: '≈',
};

const formatHistory = (history: HistoricAction[]): string =>
  history
    .map(({ operator, value }) => {
      if (operator === 'EQUAL') return String(value);
      const sym = OP_SYMBOL[operator] ?? operator;
      return `${sym} ${value}`;
    })
    .join(' ');

interface Props {
  result: number;
  history: HistoricAction[];
  onFillInput: () => void;
}

export function Result({ result, history, onFillInput }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <span className={styles.label}>History</span>
        <span className={styles.value}>{formatHistory(history)}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Total</span>
        <button className={styles.primaryValue} onClick={onFillInput}>
          {result}
        </button>
      </div>
    </section>
  );
}
