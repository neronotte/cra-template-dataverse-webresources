module.exports = {
	paths: function (paths, env) {
		paths.appBuild = paths.appBuild.replace("build", "bin/debug");
		return paths;
	},
	webpack: function (config, env) {
		config.optimization.runtimeChunk = false;
		config.optimization.splitChunks = {
			cacheGroups: {
				default: false,
			},
		};

		// JS Overrides
		config.output.filename = "js/[name].js";
		config.output.chunkFilename = "js/[name].chunk.js";

		// CSS Overrides
		config.plugins[5].options.filename = "css/[name].css";
		config.plugins[5].options.moduleFilename = "css/[name].chunk.css";

		return config;
	},
};
