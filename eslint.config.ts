import tseslint from 'typescript-eslint';
import reactX from '@eslint-react/eslint-plugin';

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: reactX.configs.recommended.plugins,
    rules: reactX.configs.recommended.rules,
  },
);
