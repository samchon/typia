import * as assert from "assert";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

import { PluginConfigurator } from "../../../../packages/typia/src/executable/setup/PluginConfigurator";

import { TestGlobal } from "../TestGlobal";

export async function test_setup_contract(): Promise<void> {
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

  const wizardSource = fs.readFileSync(
    path.join(root, "packages/typia/src/executable/TypiaSetupWizard.ts"),
    "utf8",
  );
  assert.equal(
    wizardSource.includes("@typia/ttsc"),
    true,
    "setup wizard must provision @typia/ttsc",
  );
  assert.equal(
    wizardSource.includes("@typescript/native-preview"),
    true,
    "setup wizard must provision the tsgo compiler package",
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
      { transform: "@typia/ttsc/plugin/typia" },
    ]);
    assert.equal(parsed.compilerOptions.skipLibCheck, true);
    assert.equal(parsed.compilerOptions.strictNullChecks, true);
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
}
