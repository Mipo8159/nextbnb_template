module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-var': ['warn'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['warn'],
    '@typescript-eslint/no-require-imports': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/object-curly-spacing': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    '@typescript-eslint/comma-dangle': ['off'],
    '@typescript-eslint/semi': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    'object-curly-newline': ['off'],
  },
}
