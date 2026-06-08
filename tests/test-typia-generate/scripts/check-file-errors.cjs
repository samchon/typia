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

const generateWithProject = (project, ...args) => [
  "node_modules/typia/src/executable/typia.ts",
  "generate",
  "--project",
  project,
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
    generate(
      "--output",
      "src/output-link",
      "src/input/modules/generate_module.ts",
    ),
    "symbolic link",
  );
} finally {
  fs.rmSync(link, { recursive: true, force: true });
}

const output = path.join(root, "src", "output");
const ancestor = path.join(output, "link");
const external = path.join(root, "src", "external-output");
fs.rmSync(output, { recursive: true, force: true });
fs.rmSync(external, { recursive: true, force: true });
try {
  fs.mkdirSync(output, { recursive: true });
  fs.mkdirSync(external, { recursive: true });
  fs.symlinkSync(
    external,
    ancestor,
    process.platform === "win32" ? "junction" : "dir",
  );
  expectFailure(
    "symlinked output ancestor",
    generate(
      "--output",
      "src/output/link/new",
      "src/input/modules/generate_module.ts",
    ),
    "symbolic link",
  );
  if (fs.existsSync(path.join(external, "new"))) {
    console.error("Symlinked output ancestor created an external directory.");
    process.exit(1);
  }
} finally {
  fs.rmSync(output, { recursive: true, force: true });
  fs.rmSync(external, { recursive: true, force: true });
}

const tempInput = path.join(root, "src", "input-symlink");
const tempSource = path.join(tempInput, "link", "new", "generate_module.ts");
const tempProject = path.join(root, "tsconfig.file-errors.json");
fs.rmSync(output, { recursive: true, force: true });
fs.rmSync(external, { recursive: true, force: true });
fs.rmSync(tempInput, { recursive: true, force: true });
fs.rmSync(tempProject, { force: true });
try {
  fs.mkdirSync(path.dirname(tempSource), { recursive: true });
  fs.copyFileSync(
    path.join(root, "src", "input", "modules", "generate_module.ts"),
    tempSource,
  );
  fs.writeFileSync(
    tempProject,
    JSON.stringify(
      {
        extends: "./tsconfig.json",
        include: ["src/input-symlink/link/new/generate_module.ts"],
      },
      null,
      2,
    ),
  );
  fs.mkdirSync(output, { recursive: true });
  fs.mkdirSync(external, { recursive: true });
  fs.symlinkSync(
    external,
    ancestor,
    process.platform === "win32" ? "junction" : "dir",
  );
  expectFailure(
    "directory-mode symlinked output ancestor",
    generateWithProject(
      "tsconfig.file-errors.json",
      "--input",
      "src/input-symlink",
      "--output",
      "src/output",
    ),
    "symbolic link",
  );
  if (fs.existsSync(path.join(external, "new"))) {
    console.error(
      "Directory-mode symlinked output ancestor created an external directory.",
    );
    process.exit(1);
  }
} finally {
  fs.rmSync(output, { recursive: true, force: true });
  fs.rmSync(external, { recursive: true, force: true });
  fs.rmSync(tempInput, { recursive: true, force: true });
  fs.rmSync(tempProject, { force: true });
}
