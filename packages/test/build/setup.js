const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(`${__dirname}/../../..`);
const TEST = path.resolve(`${__dirname}/..`);

const execute = (command, root) => {
  console.log(`\n${root ? "typia" : "@typia/test"} > ${command}`);
  cp.execSync(command, {
    stdio: "inherit",
    cwd: root ? ROOT : TEST,
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
  execute("npm run build", true);
  execute("npm pack", true);

  //----
  // INSTALL TYPIA
  //----
  title("Install Typia");

  if (fs.existsSync(`${TEST}/node_modules/typia`))
    execute("npm uninstall typia", false);

  const composer = JSON.parse(fs.readFileSync(`${TEST}/package.json`, "utf8"));
  composer.dependencies ??= {};
  composer.dependencies.typia = `file:${ROOT}/typia-${version}.tgz`;

  await fs.promises.writeFile(
    `${TEST}/package.json`,
    JSON.stringify(composer, null, 2),
  );
  execute("npm install --ignore-scripts", false);
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
