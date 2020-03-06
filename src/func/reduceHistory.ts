import operatorType from '../actions/operatorType';
import {historicAction} from '../actions/historicAction';

const reduceHistory = (history: historicAction[]) => history.reduce((prev, curr) => {
  const {operator, value} = curr;
  switch (operator) {
    case operatorType.ADD:
      return prev + value;
    case operatorType.SUBTRACT:
      return prev - value;
    case operatorType.DIVIDE:
      return prev / value;
    case operatorType.MULTIPLY:
      return prev * value;
    case operatorType.MODULO:
      return prev % value;
    default:
      return prev;
  }
}, 0);

export default reduceHistory;