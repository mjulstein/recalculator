import { ButtonProps } from './buttonProps';
import { Button } from './Button';

export const Add = ({ result, setResult, value, history, setHistory, disable }: ButtonProps) => (
  <Button
    onClick={() => {
      setResult(result + value);
      setHistory([...history, { operator: 'ADD', value }]);
    }}
    disabled={disable(value)}
  >
    Add
  </Button>
);
