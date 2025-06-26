const cp = require("child_process");
const path = require("path");

const dependencies = path.resolve(`${__dirname}/../compiler-dependencies`);

//-------------------------------------------------------
console.log(" Installing compiler dependencies");
//-------------------------------------------------------
cp.execSync("npm install", {
  stdio: "ignore",
  cwd: dependencies,
});
//-------------------------------------------------------
//-------------------------------------------------------
console.log(" Building compiler dependencies");
//-------------------------------------------------------
const input = "--input compiler-dependencies";
const output = "--output src/raw/external.json";
cp.execSync(`npx embed-typescript external ${input} ${output}`, {
  stdio: "ignore",
  cwd: path.resolve(__dirname, ".."),
});
//-------------------------------------------------------
//-------------------------------------------------------
console.log(" Building compiler worker program");
//-------------------------------------------------------
cp.execSync("npx rspack", {
  stdio: "inherit",
  cwd: path.resolve(__dirname, ".."),
});
//-------------------------------------------------------
