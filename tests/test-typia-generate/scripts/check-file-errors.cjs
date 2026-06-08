const cp = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const ttsx = path.resolve(
  root,
  "..",
  "..",
  "node_modules",
  ".bin",
  process.platform === "win32" ? "ttsx.CMD" : "ttsx",
);

const quote = (str) => JSON.stringify(str);

const run = (args) =>
  cp.execSync([ttsx, ...args].map(quote).join(" "), {
    cwd: root,
    encoding: "utf8",
    stdio: "pipe",
  });

const expectFailure = (name, args, expected) => {
  try {
    run(args);
  } catch (exp) {
    const output = `${exp.stdout ?? ""}${exp.stderr ?? ""}`;
    if (output.includes(expected)) return;
    console.error(`Unexpected ${name} failure output:\n${output}`);
    process.exit(1);
  }
  console.error(`Expected ${name} to fail.`);
  process.exit(1);
};

const generate = (...args) => [
  "node_modules/typia/src/executable/typia.ts",
  "generate",
  "--project",
  "tsconfig.files.json",
  ...args,
];

expectFailure(
  "literal unsupported file",
  generate("--output", "src/output", "package.json"),
  "input file is not a supported TypeScript source",
);

expectFailure(
  "declaration-only glob",
  generate("--output", "src/output", "src/input/modules/*.d.ts"),
  "supported TypeScript source files outside the output directory",
);

const link = path.join(root, "src", "output-link");
fs.rmSync(link, { recursive: true, force: true });
try {
  fs.symlinkSync(
    path.join(root, "src", "input", "modules"),
    link,
    process.platform === "win32" ? "junction" : "dir",
  );
  expectFailure(
    "symlinked output root",
    generate("--output", "src/output-link", "src/input/modules/generate_module.ts"),
    "symbolic link",
  );
} finally {
  fs.rmSync(link, { recursive: true, force: true });
}
