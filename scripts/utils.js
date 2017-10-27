const spawn = require("cross-spawn");
const path = require("path");

module.exports.runNpmTask = (package, task, args = []) => {
  spawn.sync(
    "npm",
    [...(task === "install" ? [] : ["run"]), task, "--", ...args],
    {
      cwd: path.join(__dirname, "..", package),
      stdio: "inherit"
    }
  );
};
