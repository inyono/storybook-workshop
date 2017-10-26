/*
 * Generates a new app configuration using app.json as starting point and writes it to the specified file
 *
 * - Uses version from package.json
 * - Sets packagerOpts for Travis
 */
const fs = require("fs");
const { merge } = require("ramda");

const config = require("../app.json");
const { version } = require("../package.json");

const [file] = process.argv.slice(2);

const newConfig = {
  expo: merge(config.expo, {
    version,
    packagerOpts: {
      nonPersistent: true
    }
  })
};

fs.writeFileSync(file, JSON.stringify(newConfig, null, 2));
