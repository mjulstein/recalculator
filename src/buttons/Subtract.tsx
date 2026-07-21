import { ButtonProps } from './buttonProps';
import { Button } from './Button';

export const Subtract = ({ result, setResult, value, history, setHistory, disable }: ButtonProps) => (
  <Button
    onClick={() => {
      setResult(result - value);
      setHistory([...history, { operator: 'SUBTRACT', value }]);
    }}
    disabled={disable(value)}
  >
    Subtract
  </Button>
);
