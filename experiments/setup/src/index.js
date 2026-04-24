const fs = require("node:fs");
const path = require("node:path");

const { DynamicExecutor, TestValidator } = require("@nestia/e2e");

const { createContext } = require("./internal/createContext");
const { prepareWorkspace } = require("./internal/prepareWorkspace");

function getArguments(key) {
  const prefix = `--${key}=`;
  return process.argv
    .filter((arg) => arg.startsWith(prefix))
    .flatMap((arg) =>
      arg
        .slice(prefix.length)
        .split(",")
        .map((value) => value.trim())
        .filter((value) => value.length !== 0),
    );
}

async function main() {
  const context = createContext({
    skipPack: process.argv.includes("--skip-pack"),
  });
  prepareWorkspace(context);
  if (!context.skipPack) {
    context.run("pnpm package:tgz", context.root);
  }
  context.installTarballs();
  context.verifyInstalledPackage();
  validateFeatureLayout();
  validateInternalLayout();

  const include = getArguments("include");
  const exclude = getArguments("exclude");
  const report = await DynamicExecutor.validate({
    prefix: "test_",
    location: `${__dirname}/features`,
    extension: "js",
    parameters: () => [context],
    onComplete: (exec) => {
      if (exec.error !== null) {
        console.log(`  - ${exec.name}: ${exec.error.name}`);
        return;
      }
      const elapsed = Math.max(
        0,
        new Date(exec.completed_at).getTime() -
          new Date(exec.started_at).getTime(),
      );
      console.log(`  - ${exec.name}: ${elapsed.toLocaleString()} ms`);
    },
    filter: (name) =>
      (include.length ? include.some((str) => name.includes(str)) : true) &&
      (exclude.length ? exclude.every((str) => !name.includes(str)) : true),
  });

  const exceptions = report.executions
    .filter((exec) => exec.error !== null)
    .map((exec) => exec.error);
  if (exceptions.length !== 0) {
    for (const error of exceptions) {
      console.error(error);
    }
    console.log("Failed");
    process.exit(1);
  }

  context.verifyWizardInstallCommands(report.executions.length);
  console.log("Success");
  console.log("Elapsed time", Math.max(0, report.time).toLocaleString(), "ms");
}

function validateFeatureLayout() {
  const directory = path.join(__dirname, "features");
  const files = fs
    .readdirSync(directory)
    .filter((file) => file.startsWith("test_") && file.endsWith(".js"))
    .sort();
  TestValidator.predicate(
    "setup wizard experiment has feature files",
    files.length !== 0,
  );

  for (const file of files) {
    const exports = require(path.join(directory, file));
    const functions = Object.entries(exports).filter(
      ([key, value]) => key.startsWith("test_") && typeof value === "function",
    );
    TestValidator.equals(
      `${file} exports exactly one test function`,
      1,
      functions.length,
    );
    TestValidator.equals(
      `${file} export matches file name`,
      path.basename(file, ".js"),
      functions[0]?.[0],
    );
  }
}

function validateInternalLayout() {
  const directory = path.join(__dirname, "internal");
  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".js"))
    .sort();
  for (const file of files) {
    const exports = require(path.join(directory, file));
    TestValidator.equals(
      `${file} exports exactly its file-named function`,
      [path.basename(file, ".js")],
      Object.keys(exports),
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
