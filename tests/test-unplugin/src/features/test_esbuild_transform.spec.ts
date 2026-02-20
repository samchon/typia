import { build } from "esbuild";
import { resolve } from "path";
import { describe, expect, it } from "vitest";
import UnpluginTypia from "@typia/unplugin/esbuild";

const fixturesDir = resolve(__dirname, "../fixtures");

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

describe("@typia/unplugin esbuild transform", () => {
  it("should transform createIs", async () => {
    const code = await transformWithEsbuild("is.ts");

    // transformed code should not contain typia.createIs
    expect(code).not.toContain("typia.createIs");
    // transformed code should contain actual validation logic
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
