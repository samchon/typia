import cp from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const directory = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const source = path.join(directory, "adapter_type_controls.mts");
const commonjs = path.join(
  directory,
  `adapter_type_controls.${process.pid}.cts`,
);
const tsc = path.join(
  path.dirname(require.resolve("typescript/package.json")),
  "bin",
  "tsc",
);

const resolveFromPackage = (packageName, dependency) => {
  const packageJson = require.resolve(`${packageName}/package.json`);
  return fs.realpathSync(createRequire(packageJson).resolve(dependency));
};

const assertSingleInstallation = (packageName, dependency) => {
  const consumer = fs.realpathSync(require.resolve(dependency));
  const adapter = resolveFromPackage(packageName, dependency);
  if (consumer !== adapter)
    throw new Error(
      `${dependency} has multiple installations: consumer=${consumer}, adapter=${adapter}`,
    );
};

const compile = (name, file, module, moduleResolution) => {
  cp.execFileSync(
    process.execPath,
    [
      tsc,
      "--ignoreConfig",
      "--noEmit",
      "--target",
      "ES2020",
      "--module",
      module,
      "--moduleResolution",
      moduleResolution,
      "--types",
      "node",
      "--skipLibCheck",
      file,
    ],
    { cwd: directory, stdio: "inherit" },
  );
  console.log(`adapter type identity: ${name} passed`);
};

assertSingleInstallation("@typia/langchain", "@langchain/core/tools");
assertSingleInstallation(
  "@typia/mcp",
  "@modelcontextprotocol/sdk/server/mcp.js",
);
assertSingleInstallation("@typia/vercel", "ai");

fs.copyFileSync(source, commonjs);
try {
  compile("Node16 ESM", source, "Node16", "Node16");
  compile("NodeNext ESM", source, "NodeNext", "NodeNext");
  compile("Node16 CJS", commonjs, "Node16", "Node16");
  compile("Bundler ESM", source, "ESNext", "Bundler");
} finally {
  fs.rmSync(commonjs, { force: true });
}
