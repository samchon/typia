import * as assert from "assert";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";

export async function test_setup_contract(): Promise<void> {
  const root = path.resolve(TestGlobal.ROOT, "..", "..");
  const { PluginConfigurator } = require(
    path.join(
      root,
      "packages/typia/lib/executable/setup/PluginConfigurator.js",
    ),
  ) as {
    PluginConfigurator: {
      configure(args: { manager: string; project: string }): Promise<void>;
    };
  };
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

  const wizardSource = fs.readFileSync(
    path.join(root, "packages/typia/src/executable/TypiaSetupWizard.ts"),
    "utf8",
  );
  assert.equal(
    wizardSource.includes('const TTSC_PACKAGE = "ttsc"'),
    true,
    "setup wizard must provision the external ttsc package",
  );
  assert.equal(
    wizardSource.includes("@typescript/native-preview"),
    true,
    "setup wizard must provision the tsgo compiler package",
  );

  const typiaPackage = JSON.parse(
    fs.readFileSync(path.join(root, "packages/typia/package.json"), "utf8"),
  ) as {
    files?: string[];
    optionalDependencies?: Record<string, string>;
  };
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
    default: (
      config: unknown,
      context: { projectRoot: string },
    ) => {
      native: {
        binary?: string;
        source?: { dir: string; entry?: string };
      };
    };
  };
  const descriptor = transformModule.default(
    {},
    { projectRoot: path.join(root, "tests/test-typia-ttsc") },
  );
  assert.equal(
    descriptor.native.binary,
    undefined,
    "typia transform descriptor must not point at a prebuilt binary",
  );
  assert.deepEqual(descriptor.native.source, {
    dir: path.join(root, "packages/typia/native"),
    entry: "./cmd/ttsc-typia",
  });

  const nativeGoMod = fs.readFileSync(
    path.join(root, "packages/typia/native/go.mod"),
    "utf8",
  );
  assert.equal(
    nativeGoMod.includes("../../../../ttsc"),
    false,
    "native go.mod must not contain checkout-relative ttsc replacements",
  );

  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "typia-setup-"));
  try {
    const tsconfig = path.join(temp, "tsconfig.json");
    fs.writeFileSync(
      tsconfig,
      JSON.stringify(
        {
          compilerOptions: {
            plugins: [
              { transform: "typia/lib/transform" },
              { name: "keep-me" },
            ],
            skipLibCheck: false,
            strictNullChecks: false,
          },
        },
        null,
        2,
      ),
      "utf8",
    );

    await PluginConfigurator.configure({
      manager: "pnpm",
      project: tsconfig,
    });

    const parsed = JSON.parse(fs.readFileSync(tsconfig, "utf8")) as {
      compilerOptions: {
        plugins?: unknown[];
        skipLibCheck?: boolean;
        strict?: boolean;
        strictNullChecks?: boolean;
      };
    };
    assert.deepEqual(parsed.compilerOptions.plugins, [
      { name: "keep-me" },
      { transform: "typia/lib/transform" },
    ]);
    assert.equal(parsed.compilerOptions.skipLibCheck, true);
    assert.equal(parsed.compilerOptions.strictNullChecks, true);
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
}
