// Require storybook in development mode
export default (__DEV__
  ? require("./storybook").default
  : require("./src").default);
