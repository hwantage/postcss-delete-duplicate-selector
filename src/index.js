const postcss = require('postcss');

const plugin = (opts = {}) => {
    return {
		postcssPlugin: 'postcss-delete-duplicate-selector',
		Once (root, { result }) {
			const filteredRules = new Map();
		
			root.walkRules((rule) => {
				const selector = rule.selector;

				if (!filteredRules.has(selector)) {
				filteredRules.set(selector, rule);
				}
			});

			root.removeAll();

			filteredRules.forEach((rule) => {
				root.append(rule);
			});
		}
    }
}
plugin.postcss = true

module.exports = plugin