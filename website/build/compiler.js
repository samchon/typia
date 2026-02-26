const cp = require("child_process");
const fs = require("fs");
const path = require("path");

//-------------------------------------------------------
console.log(" Making PlaygourndExampleStorage");
//-------------------------------------------------------
const load = (location) =>
  fs.readFileSync(`${__dirname}/../../examples/${location}`, "utf-8");

fs.writeFileSync(
  `${__dirname}/../src/compiler/PlaygroundExampleStorage.ts`,
  `export const PlaygroundExampleStorage = ${JSON.stringify(
    {
      "src/BbsArticleService.ts": load("src/llm/BbsArticleService.ts"),
      "src/IBbsArticle.ts": load("src/llm/IBbsArticle.ts"),
    },
    null,
    2,
  )};`,
  "utf8",
);
//-------------------------------------------------------

//-------------------------------------------------------
console.log(" Installing compiler dependencies");
//-------------------------------------------------------
const dependencies = path.resolve(`${__dirname}/../compiler-dependencies`);
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
