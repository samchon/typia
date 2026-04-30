const cp = require("child_process");
const fs = require("fs");

const validate = (directory) => {
  const tsFiles = fs.readdirSync(__dirname + "/src/" + directory);
  for (const file of tsFiles) {
    const src = fs.readFileSync(
      `${__dirname}/src/${directory}/${file}`,
      "utf8",
    );
    const bin = fs.readFileSync(
      `${__dirname}/bin/${directory}/${file.replace(".ts", ".js")}`,
      "utf8",
    );

    const x = src.split("();").length;
    const y = bin.split("();").length;
    if (x !== y) {
      console.error(
        `Bug on ${directory}/${file}, succeeded to transform invalid code.`,
        x,
        y,
      );
      return false;
    }
    return true;
  }
};

const main = () => {
  // BUILD THE ERRORS PROJECT
  try {
    cp.execSync("pnpm run build", {
      cwd: __dirname,
      stdio: "ignore",
    });
  } catch {}

  // DO VALIDATE
  const results = fs
    .readdirSync(__dirname + "/src")
    .filter((str) => fs.lstatSync(__dirname + "/src/" + str).isDirectory())
    .map(validate);
  if (results.some((x) => !x)) process.exit(-1);
};
main();
