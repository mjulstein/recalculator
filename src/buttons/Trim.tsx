import { ButtonProps } from './buttonProps';
import { Button } from './Button';

export const Trim = ({ result, setResult, decimalLength, history, setHistory }: ButtonProps) => (
  <Button
    onClick={() => {
      const trimmed = parseFloat(result.toFixed(decimalLength));
      setResult(trimmed);
      setHistory([...history, { operator: 'TRIM', value: decimalLength }]);
    }}
  >
    Trim
  </Button>
);
