const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(`${__dirname}/../../..`);
const TEST = path.resolve(`${__dirname}/..`);

const execute = (command, cwd) => {
  console.log(command);
  cp.execSync(command, {
    stdio: "ignore",
    cwd,
  });
};

const title = (name) => {
  console.log("");
  console.log("---------------------------------------------");
  console.log(` ${name}`);
  console.log("---------------------------------------------");
};

const main = async () => {
  //----
  // BUILD TYPIA
  //----
  title("Build Typia");

  const { version } = JSON.parse(
    await fs.promises.readFile(`${ROOT}/package.json`, "utf8"),
  );
  execute("npm run build", ROOT);
  execute("npm pack", ROOT);

  //----
  // INSTALL TYPIA
  //----
  title("Install Typia");

  if (fs.existsSync(`${TEST}/node_modules/typia`))
    execute("npm uninstall typia", TEST);

  const composer = JSON.parse(fs.readFileSync(`${TEST}/package.json`, "utf8"));
  composer.dependencies ??= {};
  composer.dependencies.typia = `file:${ROOT}/typia-${version}.tgz`;

  await fs.promises.writeFile(
    `${TEST}/package.json`,
    JSON.stringify(composer, null, 2),
  );
  execute("npm install --ignore-scripts", TEST);
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
