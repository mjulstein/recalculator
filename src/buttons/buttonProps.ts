import {historicAction} from '../actions/historicAction';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  result: number,
  setResult: Dispatch<SetStateAction<number>>,
  value: number,
  history: historicAction[],
  setHistory: Dispatch<SetStateAction<historicAction[]>>,
  disable: (val: number) => boolean
}

export default Props;