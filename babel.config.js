module.exports = (api) => {
	api.cache(true);
	return {
		presets: [
			[
				"babel-preset-expo",
				{
					jsxImportSource: "nativewind",
				},
			],
			"nativewind/babel",
		],
		plugins: [
			// Required for expo-router
			"@babel/plugin-proposal-export-namespace-from",
			"react-native-reanimated/plugin",
		],
	};
};
