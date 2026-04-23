const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "../..");
const outputDir = __dirname;

const targets = [
  ...listTargets(path.join(root, "toolchain")),
  ...listTargets(path.join(root, "packages")),
];

prepareNativeBinaries();
clearOutputDirectory();
for (const target of targets) build(target);

function build(target) {
  // clear tgz files
  const packageDir = target.dir;
  for (const entry of fs.readdirSync(packageDir)) {
    if (entry.endsWith(".tgz")) {
      fs.rmSync(path.join(packageDir, entry), { force: true });
    }
  }

  console.log("Building package (tgz):", target.name);
  cp.execSync("pnpm pack", {
    stdio: "inherit",
    cwd: packageDir,
  });

  // copy tgz file
  const file = fs.readdirSync(packageDir).find((f) => f.endsWith(".tgz"));
  fs.copyFileSync(
    path.join(packageDir, file),
    path.join(outputDir, `${target.tarballName}.tgz`),
  );
}

function prepareNativeBinaries() {
  console.log("Preparing native binaries");
  cp.execSync("pnpm --filter @typia/ttsc go:build", {
    stdio: "inherit",
    cwd: root,
  });
  cp.execSync("pnpm run build:native-consumers", {
    stdio: "inherit",
    cwd: root,
  });
}

function clearOutputDirectory() {
  for (const entry of fs.readdirSync(outputDir)) {
    if (entry.endsWith(".tgz")) {
      fs.rmSync(path.join(outputDir, entry), { force: true });
    }
  }
}

function listTargets(baseDir) {
  return fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      name: entry.name,
      dir: path.join(baseDir, entry.name),
      tarballName: entry.name,
    }));
}
