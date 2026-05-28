import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    ignores: ['dist', '.astro', '.vercel', 'node_modules'],
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
];
