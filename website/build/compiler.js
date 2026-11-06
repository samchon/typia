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
console.log(" Packing typia sources for the wasm worker");
//-------------------------------------------------------
require("./typia-pack");
//-------------------------------------------------------

//-------------------------------------------------------
console.log(" Packing typia runtime for the Execute sandbox");
//-------------------------------------------------------
require("./pack-typia-runtime");
//-------------------------------------------------------

//-------------------------------------------------------
console.log(" Building ttsc-typia WebAssembly module");
//-------------------------------------------------------
require("./wasm");
//-------------------------------------------------------

//-------------------------------------------------------
console.log(" Building compiler worker program");
//-------------------------------------------------------
cp.execSync("npx rspack", {
  stdio: "inherit",
  cwd: path.resolve(__dirname, ".."),
});
//-------------------------------------------------------
