import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";

export async function test_package_plugin_contract(): Promise<void> {
  const root = path.resolve(TestGlobal.ROOT, "..", "..");
  const manifest = JSON.parse(
    fs.readFileSync(path.join(root, "package.json"), "utf8"),
  ) as {
    devDependencies?: Record<string, string>;
    scripts?: Record<string, string>;
  };
  assert.equal(
    manifest.devDependencies?.["ts-patch"],
    undefined,
    "root package.json must not depend on ts-patch anymore",
  );
  assert.equal(
    manifest.scripts?.prepare,
    undefined,
    "root package.json must not run ts-patch in prepare anymore",
  );

  const workspace = fs.readFileSync(
    path.join(root, "pnpm-workspace.yaml"),
    "utf8",
  );
  assert.equal(
    workspace.includes("ts-patch:"),
    false,
    "workspace catalog must not keep ts-patch entries",
  );

  const typiaPackage = JSON.parse(
    fs.readFileSync(path.join(root, "packages/typia/package.json"), "utf8"),
  ) as {
    files?: string[];
    optionalDependencies?: Record<string, string>;
    ttsc?: {
      plugin?: {
        transform?: string;
      };
    };
  };
  assert.equal(
    typiaPackage.ttsc?.plugin?.transform,
    "typia/lib/transform",
    "typia must expose its ttsc plugin through package.json",
  );
  assert.equal(
    typiaPackage.optionalDependencies,
    undefined,
    "typia must not depend on platform-specific native binary packages",
  );
  assert.equal(
    typiaPackage.files?.includes("native"),
    true,
    "typia package must publish its native Go source tree",
  );
  assert.equal(
    typiaPackage.files?.includes("bin"),
    false,
    "typia package must not publish a native binary bin directory",
  );

  const transformModule = require(
    path.join(root, "packages/typia/lib/transform.js"),
  ) as {
    default: (context: { projectRoot: string }) => {
      name: string;
      native?: unknown;
      source: string;
    };
  };
  const descriptor = transformModule.default({
    projectRoot: path.join(root, "tests/test-typia-ttsc"),
  });
  assert.equal(descriptor.name, "typia");
  assert.equal(
    descriptor.native,
    undefined,
    "typia transform descriptor must not point at a prebuilt binary",
  );
  assert.equal(
    descriptor.source,
    path.join(root, "packages/typia/native/cmd/ttsc-typia"),
  );

  const nativeGoMod = fs.readFileSync(
    path.join(root, "packages/typia/native/go.mod"),
    "utf8",
  );
  assert.equal(
    nativeGoMod.includes("../../../../ttsc"),
    false,
    "native go.mod must not contain checkout-relative ttsc replacements",
  );
}
