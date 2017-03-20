module.exports = {
	plugins: {
		"postcss-salad": {
			browsers: ["ie >= 8", "last 2 versions"],
			features: {
				bem: true
			}
		}
	}
}