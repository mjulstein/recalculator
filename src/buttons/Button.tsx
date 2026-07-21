import { PropsWithChildren, ButtonHTMLAttributes } from 'react';
import styles from '../styles/Button.module.css';

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'numeric';
}

export const Button = ({
  children,
  className,
  variant = 'default',
  ...props
}: PropsWithChildren<ButtonComponentProps>) => (
  <button
    className={[styles.button, variant === 'numeric' ? styles.numeric : undefined, className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </button>
);
