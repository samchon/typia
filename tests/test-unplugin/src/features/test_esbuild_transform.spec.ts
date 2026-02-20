import { build } from "esbuild";
import { resolve } from "path";
import { describe, expect, it } from "vitest";

const fixturesDir = resolve(__dirname, "../fixtures");

// Check if we can load the unplugin (requires built @typia/core)
let UnpluginTypia: any;
let canRunTests = false;

try {
  UnpluginTypia = (await import("@typia/unplugin/esbuild")).default;
  canRunTests = true;
} catch {
  console.warn(
    "[@typia/unplugin] Skipping tests - @typia/core not built or available",
  );
}

async function transformWithEsbuild(filename: string): Promise<string> {
  const inputPath = resolve(fixturesDir, filename);
  const result = await build({
    entryPoints: [inputPath],
    bundle: false,
    write: false,
    format: "esm",
    plugins: [
      UnpluginTypia({
        cache: false,
        log: false,
      }),
    ],
  });
  return result.outputFiles[0].text;
}

describe.skipIf(!canRunTests)("@typia/unplugin esbuild transform", () => {
  it("should transform createIs", async () => {
    const code = await transformWithEsbuild("is.ts");

    expect(code).not.toContain("typia.createIs");
    expect(code).toContain("function");
  });

  it("should transform createValidate", async () => {
    const code = await transformWithEsbuild("validate.ts");

    expect(code).not.toContain("typia.createValidate");
    expect(code).toContain("function");
  });

  it("should transform createRandom", async () => {
    const code = await transformWithEsbuild("random.ts");

    expect(code).not.toContain("typia.createRandom");
    expect(code).toContain("function");
  });
});
