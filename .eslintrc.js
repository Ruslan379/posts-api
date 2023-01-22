module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"eslint-config-prettier",
		"plugin:node/recommended",
		"plugin:prettier/recommended",
	],
	// "plugin:react/recommended";
	// ["plugin:node/recommended"]
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
	},

	rules: {
		"no-console": "warn",
		// "prettier/prettier": "warn",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
	plugins: ["eslint-config-prettier"],
};

// module.exports = {
// 	env: {
// 		commonjs: true,
// 		es2021: true,
// 		node: true,
// 	},
// 	extends: ["eslint:recommended", "eslint-config-prettier"],
// 	overrides: [],
// 	parserOptions: {
// 		ecmaVersion: "latest",
// 	},
// 	rules: {
// 		// 'no-console': 'error',
// 		plugins: ["eslint-plugin-prettier"],
// 	},
// };
