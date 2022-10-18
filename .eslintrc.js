module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:tailwindcss/recommended',
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
    'tailwindcss/classnames-order': ['off'],
    'arrow-body-style': ['off'],
    '@typescript-eslint/object-curly-spacing': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    '@typescript-eslint/comma-dangle': ['off'],
    '@typescript-eslint/semi': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    'object-curly-newline': ['off'],
  },
}
