const spawn = require("cross-spawn");
const path = require("path");

const runNpmTask = (task, args = []) => {
  spawn.sync("npm", ["run", task, "--", ...args], {
    cwd: path.join(__dirname, ".."),
    stdio: "inherit"
  });
};

runNpmTask("exp:config", ["app.json"]);
runNpmTask("exp:login", [
  "--non-interactive",
  "--username",
  process.env.EXP_USERNAME,
  "--password",
  process.env.EXP_PASSWORD
]);
runNpmTask("exp:publish", ["--non-interactive"]);
