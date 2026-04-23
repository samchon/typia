const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const { readProjectConfig, resolveProjectConfig } = require("../src/project.ts");

test("resolveProjectConfig canonicalizes symlinked tsconfig paths", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ttsc-project-"));
  const real = path.join(root, "real");
  const link = path.join(root, "link");
  fs.mkdirSync(real, { recursive: true });
  fs.writeFileSync(path.join(real, "tsconfig.json"), "{}\n", "utf8");
  fs.symlinkSync(real, link, "dir");

  const resolved = resolveProjectConfig({
    tsconfig: path.join(link, "tsconfig.json"),
  });
  assert.equal(resolved, fs.realpathSync(path.join(real, "tsconfig.json")));
});

test("readProjectConfig inherits plugins and outDir through tsconfig extends", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ttsc-project-"));
  const shared = path.join(root, "config");
  const project = path.join(root, "project");
  fs.mkdirSync(shared, { recursive: true });
  fs.mkdirSync(project, { recursive: true });
  fs.writeFileSync(
    path.join(shared, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          outDir: "../dist/shared",
          plugins: [{ transform: "typia/lib/ttsc/plugin" }],
        },
      },
      null,
      2,
    ),
    "utf8",
  );
  fs.writeFileSync(
    path.join(project, "tsconfig.json"),
    JSON.stringify(
      {
        extends: "../config/tsconfig.json",
        compilerOptions: {},
      },
      null,
      2,
    ),
    "utf8",
  );

  const parsed = readProjectConfig({
    tsconfig: path.join(project, "tsconfig.json"),
  });
  assert.deepEqual(parsed.compilerOptions.plugins, [
    { transform: "typia/lib/ttsc/plugin" },
  ]);
  assert.equal(parsed.compilerOptions.outDir, path.join(root, "dist/shared"));
});

test("readProjectConfig lets child tsconfig override inherited plugins", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "ttsc-project-"));
  const shared = path.join(root, "config");
  const project = path.join(root, "project");
  fs.mkdirSync(shared, { recursive: true });
  fs.mkdirSync(project, { recursive: true });
  fs.writeFileSync(
    path.join(shared, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          plugins: [{ transform: "typia/lib/ttsc/plugin" }],
        },
      },
      null,
      2,
    ),
    "utf8",
  );
  fs.writeFileSync(
    path.join(project, "tsconfig.json"),
    JSON.stringify(
      {
        extends: "../config/tsconfig.json",
        compilerOptions: {
          plugins: [{ transform: "./local-plugin.cjs" }],
        },
      },
      null,
      2,
    ),
    "utf8",
  );

  const parsed = readProjectConfig({
    tsconfig: path.join(project, "tsconfig.json"),
  });
  assert.deepEqual(parsed.compilerOptions.plugins, [
    { transform: "./local-plugin.cjs" },
  ]);
});
