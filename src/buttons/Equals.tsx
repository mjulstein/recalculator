import { ButtonProps } from './buttonProps';
import { Button } from './Button';
import { reduceHistory } from '../func/reduceHistory';

export const Equals = ({ setResult, value, history, disable }: ButtonProps) => (
  <Button
    onClick={() => setResult(reduceHistory(history))}
    disabled={!history.length || disable(value)}
  >
    Equals
  </Button>
);
