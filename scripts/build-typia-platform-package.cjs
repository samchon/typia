const cp = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const cwd = process.cwd();
const manifest = JSON.parse(
  fs.readFileSync(path.join(cwd, "package.json"), "utf8"),
);
const match = /^@typia\/(linux|darwin|win32)-(x64|arm|arm64)$/.exec(
  manifest.name,
);

if (!match) {
  throw new Error(
    `build-typia-platform-package: unsupported package name ${manifest.name}`,
  );
}

const [, npmOs, npmArch] = match;
const goos = npmOs === "win32" ? "windows" : npmOs;
const goarch = npmArch === "x64" ? "amd64" : npmArch;
const root = path.resolve(cwd, "../..");
const source = path.join(root, "packages", "transform", "native");
const outDir = path.join(cwd, "bin");
const outFile = path.join(
  outDir,
  npmOs === "win32" ? "ttsc-typia-native.exe" : "ttsc-typia-native",
);

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const goRoot = path.join(process.env.HOME ?? "", "go-sdk", "go", "bin");
const pathValue = fs.existsSync(goRoot)
  ? `${goRoot}${path.delimiter}${process.env.PATH ?? ""}`
  : process.env.PATH;

console.log(`Building ${manifest.name} -> ${path.relative(root, outFile)}`);
cp.execFileSync("go", ["build", "-o", outFile, "./cmd/ttsc-typia"], {
  cwd: source,
  env: {
    ...process.env,
    CGO_ENABLED: "0",
    GOARCH: goarch,
    GOOS: goos,
    PATH: pathValue,
  },
  stdio: "inherit",
});

if (npmOs !== "win32") {
  fs.chmodSync(outFile, 0o755);
}
