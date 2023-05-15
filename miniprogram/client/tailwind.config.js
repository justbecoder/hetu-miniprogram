const sharedConfig = require('@hetu/tailwindcss-config/tailwind-config');

module.exports = {
  presets: [sharedConfig],
  corePlugins: {
    preflight: false,
  },
};
