const cp = require("child_process");

const main = async () => {
  const execute = (str) =>
    cp.execSync(str, {
      cwd: `${__dirname}/..`,
      stdio: "inherit",
    });
  execute(
    `npx typedoc --hostedBaseUrl https://typia.io/api/`,
  );
};
main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
