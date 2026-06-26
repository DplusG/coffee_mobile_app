// eslint.config.mjs
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			prettier,
			react,
			'react-native': reactNative,
			'react-hooks': reactHooks,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'react-native/no-unused-styles': 2,
			'react-native/split-platform-components': 2,
			'react-native/no-inline-styles': 2,
			'react-native/no-color-literals': 2,
			'react-native/no-raw-text': 2,
			'react-native/no-single-element-style-arrays': 2,
			'react-hooks/exhaustive-deps': 'off',
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					useTabs: false,
					semi: true,
					trailingComma: 'all',
					bracketSpacing: true,
					printWidth: 100,
					endOfLine: 'auto',
				},
			],
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
		},
	},
);