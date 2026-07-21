import { HistoricAction } from '../actions/HistoricAction';

export const reduceHistory = (history: HistoricAction[]) =>
  history.reduce((prev, curr) => {
    const { operator, value } = curr;
    switch (operator) {
      case 'ADD':      return prev + value;
      case 'SUBTRACT': return prev - value;
      case 'DIVIDE':   return prev / value;
      case 'MULTIPLY': return prev * value;
      case 'MODULO':   return prev % value;
      case 'TRIM':     return parseFloat(prev.toFixed(value));
      default:         return prev;
    }
  }, 0);
