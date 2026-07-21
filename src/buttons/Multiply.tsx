import { ButtonProps } from './buttonProps';
import { Button } from './Button';

export const Multiply = ({ result, setResult, value, history, setHistory, disable }: ButtonProps) => (
  <Button
    onClick={() => {
      setResult(result * value);
      setHistory([...history, { operator: 'MULTIPLY', value }]);
    }}
    disabled={disable(value)}
  >
    Multiply
  </Button>
);
