const cp = require("child_process");
const fs = require("fs");
const supress = require("suppress-warnings");

const setup = () => {
  const version = (() => {
    cp.execSync("npm pack", { cwd: `${__dirname}/..` });
    const pack = JSON.parse(
      fs.readFileSync(`${__dirname}/../package.json`, "utf8"),
    );
    return pack.version;
  })();
  const mine = JSON.parse(fs.readFileSync(`${__dirname}/package.json`, "utf8"));

  if (fs.existsSync(`${__dirname}/node_modules/typia`))
    cp.execSync("npm uninstall typia", {
      cwd: __dirname,
      stdio: "ignore",
    });
  mine.dependencies.typia = `../typia-${version}.tgz`;
  fs.writeFileSync(`${__dirname}/package.json`, JSON.stringify(mine, null, 2));
  cp.execSync("npm install", { cwd: __dirname, stdio: "ignore" });
};

const execute = () => {
  cp.execSync("npx rimraf bin && npx tsc", {
    cwd: __dirname,
    stdio: "inherit",
  });
};

supress([() => true]);
setup();
execute();
