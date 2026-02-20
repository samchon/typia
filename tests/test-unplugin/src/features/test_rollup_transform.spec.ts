import { rollup } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { resolve } from "path";
import { describe, expect, it } from "vitest";

const fixturesDir = resolve(__dirname, "../fixtures");

// Check if we can load the unplugin (requires built @typia/core)
let UnpluginTypia: any;
let canRunTests = false;

try {
  UnpluginTypia = (await import("@typia/unplugin/rollup")).default;
  canRunTests = true;
} catch {
  console.warn(
    "[@typia/unplugin] Skipping tests - @typia/core not built or available",
  );
}

async function transformWithRollup(filename: string): Promise<string> {
  const inputPath = resolve(fixturesDir, filename);
  const bundle = await rollup({
    input: inputPath,
    plugins: [
      UnpluginTypia({
        cache: false,
        log: false,
      }),
      esbuild(),
    ],
    treeshake: "smallest",
    external: ["typia"],
  });
  const { output } = await bundle.generate({ format: "esm" });
  return output[0].code;
}

describe.skipIf(!canRunTests)("@typia/unplugin rollup transform", () => {
  it("should transform createIs", async () => {
    const code = await transformWithRollup("is.ts");

    // transformed code should not contain typia.createIs
    expect(code).not.toContain("typia.createIs");
    // transformed code should contain actual validation logic
    expect(code).toContain("function");
  });

  it("should transform createValidate", async () => {
    const code = await transformWithRollup("validate.ts");

    expect(code).not.toContain("typia.createValidate");
    expect(code).toContain("function");
  });

  it("should transform createRandom", async () => {
    const code = await transformWithRollup("random.ts");

    expect(code).not.toContain("typia.createRandom");
    expect(code).toContain("function");
  });
});
