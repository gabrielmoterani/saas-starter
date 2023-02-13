module.exports = {
  extends: ['next/core-web-vitals', 'airbnb-base', 'airbnb-typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        noUnusedLocals: 0,
        'import/no-extraneous-dependencies': 'off',
        semi: ['error', 'never'],
        '@typescript-eslint/semi': 'off',
      },
    },
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
}
