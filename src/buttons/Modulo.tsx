import { ButtonProps } from './buttonProps';
import { Button } from './Button';

export const Modulo = ({ result, setResult, value, history, setHistory, disable }: ButtonProps) => (
  <Button
    onClick={() => {
      setResult(result % value);
      setHistory([...history, { operator: 'MODULO', value }]);
    }}
    disabled={disable(value) || !Number.isInteger(result) || !Number.isInteger(value)}
  >
    Modulo
  </Button>
);
