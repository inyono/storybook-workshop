const { runNpmTask } = require("./utils");

const [task] = process.argv.slice(2);

runNpmTask("mobile", task);
runNpmTask("web", task);
