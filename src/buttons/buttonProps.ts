import { HistoricAction } from '../actions/HistoricAction';
import { Dispatch, SetStateAction } from 'react';

export interface ButtonProps {
  result: number;
  setResult: Dispatch<SetStateAction<number>>;
  value: number;
  history: HistoricAction[];
  setHistory: Dispatch<SetStateAction<HistoricAction[]>>;
  disable: (val: number) => boolean;
  decimalLength: number;
}
