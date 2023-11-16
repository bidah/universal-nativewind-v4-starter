const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

// 1. Enable CSS for Expo.
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx", "cjs", "json", "mjs"],
  },
});

config.resolver.assetExts.push("mjs");

const { withNativeWind } = require("nativewind/metro");
module.exports = withNativeWind(config, {
  // 3. Set `input` to your CSS file with the Tailwind at-rules
  input: "global.css",
  watchFolders: [path.resolve(__dirname, "/app")],
});
