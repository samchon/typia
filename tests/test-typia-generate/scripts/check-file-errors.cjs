const cp = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const root = path.resolve(__dirname, "..");
const cache = fs.mkdtempSync(path.join(os.tmpdir(), "typia-generate-errors-"));
const ttsx = path.resolve(
  root,
  "..",
  "..",
  "node_modules",
  ".bin",
  process.platform === "win32" ? "ttsx.CMD" : "ttsx",
);

const quote = (str) => JSON.stringify(str);

process.on("exit", () => {
  fs.rmSync(cache, { recursive: true, force: true });
});

const run = (args) =>
  cp.execSync(
    [ttsx, "--no-plugins", "--cache-dir", cache, ...args]
      .map(quote)
      .join(" "),
    {
      cwd: root,
      encoding: "utf8",
      env: {
        ...process.env,
        TTSC_CACHE_DIR: cache,
      },
      stdio: "pipe",
    },
  );

const removePath = (file) => {
  if (fs.existsSync(file) === false) return;
  const stat = fs.lstatSync(file);
  if (stat.isSymbolicLink()) {
    if (process.platform === "win32") fs.rmdirSync(file);
    else fs.unlinkSync(file);
    return;
  }
  fs.rmSync(file, { recursive: true, force: true });
};

const expectFailure = (name, args, expected) => {
  try {
    run(args);
  } catch (exp) {
    const output = `${exp.stdout ?? ""}${exp.stderr ?? ""}`;
    if (output.includes(expected)) return;
    throw new Error(`Unexpected ${name} failure output:\n${output}`);
  }
  throw new Error(`Expected ${name} to fail.`);
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
  "directory passed as literal file",
  generate("--output", "src/output", "src/input/modules"),
  "input path is not a file",
);

expectFailure(
  "declaration-only glob",
  generate("--output", "src/output", "src/input/modules/*.d.ts"),
  "supported TypeScript source files outside the output directory",
);

expectFailure(
  "declaration-only literal",
  generate("--output", "src/output", "src/input/modules/ignored.d.ts"),
  "supported TypeScript source files outside the output directory",
);

expectFailure(
  "missing directory input",
  generateWithProject(
    "tsconfig.files.json",
    "--input",
    "src/does-not-exist",
    "--output",
    "src/output",
  ),
  "input path does not exist",
);

const inputModule = path.join(
  root,
  "src",
  "input",
  "modules",
  "generate_module.ts",
);

const link = path.join(root, "src", "output-link");
removePath(link);
try {
  fs.symlinkSync(
    path.dirname(inputModule),
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
  removePath(link);
}

const output = path.join(root, "src", "output");
const ancestor = path.join(output, "link");
const external = path.join(root, "src", "external-output");
removePath(output);
removePath(external);
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
    throw new Error("Symlinked output ancestor created an external directory.");
  }
} finally {
  removePath(output);
  removePath(external);
}

const tempInput = path.join(root, "src", "input-symlink");
const tempSource = path.join(tempInput, "link", "new", "generate_module.ts");
const tempProject = path.join(root, "tsconfig.file-errors.json");
removePath(output);
removePath(external);
removePath(tempInput);
removePath(tempProject);
try {
  fs.mkdirSync(path.dirname(tempSource), { recursive: true });
  fs.copyFileSync(
    inputModule,
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
    throw new Error(
      "Directory-mode symlinked output ancestor created an external directory.",
    );
  }
} finally {
  removePath(output);
  removePath(external);
  removePath(tempInput);
  removePath(tempProject);
}

removePath(output);
try {
  fs.mkdirSync(output, { recursive: true });
  fs.linkSync(inputModule, path.join(output, "generate_module.ts"));
  expectFailure(
    "hard-linked output leaf",
    generate("--output", "src/output", "src/input/modules/generate_module.ts"),
    "physical file alias",
  );
  if (fs.readFileSync(inputModule, "utf8").includes("// @ts-nocheck")) {
    throw new Error("Hard-linked output leaf rewrote the input source.");
  }
} finally {
  removePath(output);
}
