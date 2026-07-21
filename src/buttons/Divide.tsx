import { ButtonProps } from './buttonProps';
import { Button } from './Button';

export const Divide = ({ result, setResult, value, history, setHistory, disable }: ButtonProps) => (
  <Button
    onClick={() => {
      setResult(result / value);
      setHistory([...history, { operator: 'DIVIDE', value }]);
    }}
    disabled={value === 0 || disable(value)}
  >
    Divide
  </Button>
);
