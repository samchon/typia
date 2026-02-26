const cp = require("child_process");
const fs = require("fs");

const main = async () => {
  const execute = (str) =>
    cp.execSync(str, {
      cwd: `${__dirname}/..`,
      stdio: "inherit",
    });
  execute("npx typedoc --json typedoc-json/typia.json");
  execute(
    `npx typedoc --entryPointStrategy merge "typedoc-json/*.json" --hostedBaseUrl https://typia.io/api/`,
  );
  await fs.promises.writeFile(
    `${__dirname}/../public/api/typia.json`,
    await fs.promises.readFile(
      `${__dirname}/../typedoc-json/typia.json`,
      "utf8",
    ),
    "utf8",
  );
};
main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
