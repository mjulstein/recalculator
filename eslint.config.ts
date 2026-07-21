import tseslint from 'typescript-eslint';
import reactX from '@eslint-react/eslint-plugin';
import prettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: reactX.configs.recommended.plugins,
    rules: reactX.configs.recommended.rules,
  },
  prettier,
);
