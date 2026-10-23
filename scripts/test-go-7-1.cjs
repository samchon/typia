const path = require("node:path");
const { spawnSync } = require("node:child_process");

// Select the 7.1 facades without changing the default 7.0 workspace. Separate
// argv and environment entries work with both Windows and POSIX process APIs.
const root = path.resolve(__dirname, "..");
const result = spawnSync(
  "go",
  ["-C", "packages/typia/test", "test", "./...", "../native/..."],
  {
    cwd: root,
    stdio: "inherit",
    env: {
      ...process.env,
      GOWORK: path.join(root, "packages/typia/test/go.7.1.work"),
      GOFLAGS: `${process.env.GOFLAGS ?? ""} -tags=ttsc_typescript_7_1`.trim(),
    },
  },
);
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
