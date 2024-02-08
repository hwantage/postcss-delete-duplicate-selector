const postcss = require("postcss");

const plugin = (opts = {}) => {
  return {
    postcssPlugin: "postcss-delete-duplicate-selector",
    Once(root, { result }) {
      const filteredRules = new Map();

      root.walk((node) => {
        // Check if the node is a rule and not an at-rule and parent type is root
        if (node.type === "rule" && node.parent.type === "root") {
          const selector = node.selector;

          if (!filteredRules.has(selector)) {
            filteredRules.set(selector, node);
          }
        } else if (node.type === "atrule") {
          const mediaRule = postcss.atRule({
            name: node.name,
            params: node.params,
          });

          node.nodes &&
            node.nodes.forEach((rule) => {
              const clonedRule = rule.clone();
              mediaRule.append(clonedRule);
            });

          filteredRules.set(mediaRule.toString(), mediaRule);
        }
      });

      root.removeAll();

      filteredRules.forEach((rule, index) => {
        root.append(rule);
      });
    },
  };
};

plugin.postcss = true;

module.exports = plugin;
