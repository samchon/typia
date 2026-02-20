import { build } from "vite";
import type { RollupOutput } from "rollup";
import { resolve } from "path";
import { describe, expect, it } from "vitest";

const fixturesDir = resolve(__dirname, "../fixtures");

// Check if we can load the unplugin (requires built @typia/core)
let UnpluginTypia: any;
let canRunTests = false;

try {
  UnpluginTypia = (await import("@typia/unplugin/vite")).default;
  canRunTests = true;
} catch {
  console.warn(
    "[@typia/unplugin] Skipping tests - @typia/core not built or available",
  );
}

async function transformWithVite(filename: string): Promise<string> {
  const inputPath = resolve(fixturesDir, filename);
  const { output } = (await build({
    root: fixturesDir,
    build: {
      minify: false,
      rollupOptions: {
        input: [inputPath],
        external: ["typia"],
      },
      write: false,
    },
    logLevel: "silent",
    plugins: [
      UnpluginTypia({
        cache: false,
        log: false,
      }),
    ],
  })) as RollupOutput;
  return output[0].code;
}

describe.skipIf(!canRunTests)("@typia/unplugin vite transform", () => {
  it("should transform createIs", async () => {
    const code = await transformWithVite("is.ts");

    // transformed code should not contain typia.createIs
    expect(code).not.toContain("typia.createIs");
    // transformed code should contain actual validation logic
    expect(code).toContain("function");
  });

  it("should transform createValidate", async () => {
    const code = await transformWithVite("validate.ts");

    expect(code).not.toContain("typia.createValidate");
    expect(code).toContain("function");
  });

  it("should transform createRandom", async () => {
    const code = await transformWithVite("random.ts");

    expect(code).not.toContain("typia.createRandom");
    expect(code).toContain("function");
  });
});
