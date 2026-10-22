import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/**
 * Verifies the installed ttsc launcher transforms content-mapped types.
 *
 * A native-host test cannot prove that the launcher forwards external-code
 * permission or that emitted validators execute with the mapped schema.
 *
 * 1. Compile without permission and require TS18068 before the mapper starts.
 * 2. Compile two SQL column states with permission through the installed CLI.
 * 3. Execute each validator on valid, missing, wrong-type and stale-column rows.
 * 4. Inspect the mapped JSON schema and require each mapper project to close.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the installed ttsc launcher and executes its generated JavaScript module through the existing ttsx runtime so workspace TypeScript dependencies resolve. Asserts concrete validator verdicts, string-property schema shape, the denied external-code diagnostic and closeProject notifications.
 * @evidence contracts/testing.md#independent-expectations The fixture mapper declares exactly the SQL-named string property. Authored valid, missing, number and old-column objects supply independent positive and negative inputs; JSON Schema properties and required follow that declaration.
 * @evidence contracts/testing.md#distinguishing-cases The same project transitions from denied execution to name and label columns. Each allowed result accepts its current string column and rejects empty, wrong-type and stale rows; every completed compile must close its mapper project.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers this E2E case in the ordinary schema feature population on both compiler lines. TypeScript 7.0 proves mapped modules are unavailable; the 7.1 CI population additionally executes permitted mapped validators and schemas.
 * @evidence contracts/e2e.md#necessary-boundary The installed CLI must select the 7.1 compiler, forward permission to typia's native plugin and emit validators whose runtime decisions retain the mapper declarations; direct factory calls cannot verify those connections.
 * @evidence contracts/e2e.md#shared-execution One isolated consumer fixture and the workspace's shared content-keyed plugin binary serve all cases. Fresh CLI launches distinguish permission and changed SQL inputs; no package reinstall or binary rebuild is performed per assertion.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity A test-owned directory beside the workspace dependencies contains SQL, mapper, logs and outputs. Each CLI exits before mutation; logs reset per allowed state and finally removes the owned directory even after failure.
 * @evidence contracts/e2e.md#preserved-coverage This new CLI case owns executable positive and negative validator verdicts and mapped schema assertions; the tagged Go companion retains the native command's independent inherited-flag and close checks.
 */
export const test_content_mapper_native_transform = (): void => {
  const root = fs.mkdtempSync(path.join(process.cwd(), ".content-mapper-"));
  const mapper = path.join(root, "node_modules/sql-mapper");
  const launcher = path.dirname(require.resolve("ttsc/package.json"));
  const compile = path.join(launcher, "lib/launcher/ttsc.js");
  const execute = path.join(launcher, "lib/launcher/ttsx.js");
  const log = path.join(mapper, "mapper.log");
  const options = { cwd: root, encoding: "utf8" as const, timeout: 1_200_000 };
  try {
    fs.mkdirSync(mapper, { recursive: true });
    fs.copyFileSync(path.join(process.cwd(), "fixtures/content-mapper/mapper.cjs"), path.join(mapper, "mapper.cjs"));
    fs.writeFileSync(path.join(mapper, "package.json"), JSON.stringify({ name: "sql-mapper", version: "1.0.0", typescript: { contentMapper: { exec: [process.execPath, "./mapper.cjs"] } } }));
    fs.writeFileSync(path.join(root, "tsconfig.json"), JSON.stringify({ compilerOptions: { module: "nodenext", moduleResolution: "nodenext", target: "es2022", strict: true, skipLibCheck: true, outDir: "out" }, files: ["index.ts"], contentMappers: [{ package: "sql-mapper", extensions: [".sql"] }] }));
    fs.writeFileSync(path.join(root, "index.ts"), 'import typia from "typia"; import { query } from "./query.sql"; export const isRow = typia.createIs<typeof query>(); export const schema = typia.json.schema<typeof query>();');
    fs.writeFileSync(path.join(root, "query.sql"), "name\n");
    const denied = spawnSync(process.execPath, [compile, "--emit", "-p", "tsconfig.json"], options);
    if (denied.error) throw denied.error;
    assert.notEqual(denied.status, 0);
    assert.equal(fs.existsSync(log), false);
    const version: string = require("typescript/package.json").version;
    if (version.startsWith("7.0.")) {
      assert.match(denied.stdout + denied.stderr, /TS2307|TS5023/);
      return;
    }
    assert.match(denied.stdout + denied.stderr, /TS18068/);
    let previous = "";
    for (const column of ["name", "label"]) {
      fs.writeFileSync(path.join(root, "query.sql"), column + "\n");
      fs.rmSync(log, { force: true });
      execFileSync(process.execPath, [compile, "--runExternalCode", "--emit", "-p", "tsconfig.json"], options);
      fs.writeFileSync(path.join(root, "check.cjs"), `
const assert = require("node:assert/strict");
const { isRow, schema } = require("./out/index.js");
const column = ${JSON.stringify(column)};
assert.equal(isRow({ [column]: "ok" }), true);
assert.equal(isRow({}), false);
assert.equal(isRow({ [column]: 1 }), false);
assert.equal(isRow({ [${JSON.stringify(previous || "other")}]: "ok" }), false);
let found = false;
function visit(value) {
  if (!value || typeof value !== "object") return;
  if (value.properties) {
    assert.deepEqual(value.properties, { [column]: { type: "string" } });
    assert.deepEqual(value.required, [column]);
    found = true;
  }
  for (const child of Object.values(value)) visit(child);
}
visit(schema);
assert.equal(found, true);
`);
      execFileSync(process.execPath, [execute, "check.cjs"], options);
      assert.match(fs.readFileSync(log, "utf8"), /(?:^|\n)closeProject\n/);
      previous = column;
    }
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
};
