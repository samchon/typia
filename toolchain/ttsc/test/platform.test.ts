const assert = require("node:assert/strict");
const test = require("node:test");
const {
  binaryName,
  installHint,
  platformPackageRequest,
  resolveBinary,
} = require("../src/platform.ts");

test("resolveBinary prefers TTSC_BINARY absolute override", () => {
  const resolved = resolveBinary({
    env: {
      TTSC_BINARY: "/tmp/custom-ttsc",
    },
    localBinaryLookup: () => "/tmp/local-ttsc",
    resolver: () => {
      throw new Error("resolver should not be called when TTSC_BINARY is set");
    },
  });
  assert.equal(resolved, "/tmp/custom-ttsc");
});

test("resolveBinary falls back to local binary when optional package is missing", () => {
  const resolved = resolveBinary({
    env: {},
    localBinaryLookup: () => "/tmp/local-ttsc",
    resolver: () => {
      throw new Error("optional package missing");
    },
  });
  assert.equal(resolved, "/tmp/local-ttsc");
});

test("resolveBinary returns null when only published and local binaries are missing", () => {
  const resolved = resolveBinary({
    env: {},
    localBinaryLookup: () => null,
    moduleDir: `${process.cwd()}/src`,
    resolver: () => {
      throw new Error("optional package missing");
    },
  });
  assert.equal(resolved, null);
});

test("platform helpers describe the published package contract", () => {
  assert.equal(binaryName({ platform: "win32" }), "ttsc.exe");
  assert.equal(binaryName({ platform: "linux" }), "ttsc");
  assert.equal(
    platformPackageRequest({ platform: "linux", arch: "x64" }),
    "@typia/ttsc-linux-x64/bin/ttsc",
  );

  const hint = installHint({ platform: "linux", arch: "x64" });
  assert.match(hint, /@typia\/ttsc-linux-x64/);
  assert.match(hint, /TTSC_BINARY env var/);
  assert.doesNotMatch(hint, /ttsc-dev\.js/);
});
