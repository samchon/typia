const cp = require("child_process");
const fs = require("fs");

const LOCATION = `${__dirname}/../package.json`;

const main = async () => {
  const composer = JSON.parse(await fs.promises.readFile(LOCATION, "utf-8"));
  const typia = composer.dependencies?.typia;

  if (typia === undefined) return;
  else if (fs.existsSync(typia.substring(5)))
    cp.execSync(`npm uninstall typia`, { stdio: "ignore", cwd: __dirname });
  else {
    delete composer.dependencies.typia;
    await fs.promises.writeFile(LOCATION, JSON.stringify(composer, null, 2));
  }
};
main().catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
