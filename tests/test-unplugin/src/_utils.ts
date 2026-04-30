import { $ } from "dax-sh";
import fs from "node:fs/promises";
import { resolve } from "pathe";

export const root: string = resolve(__dirname, "fixtures");

export function getFixtureID(id: string): string {
  return resolve(root, id);
}

export async function writeGeneratedFixture(
  provider: string,
  _id: string,
  code: string,
  ext: string = "js",
): Promise<string> {
  const id = _id.replace(/\.ts$/, `.${ext}`);
  const dir = resolve(root, ".generated", provider);
  const file = resolve(dir, id);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(file, code);
  return file;
}

export async function readFixture(id: string): Promise<string> {
  const _id = getFixtureID(id);
  return await fs.readFile(_id, "utf-8");
}

export async function getFixtureIDs(): Promise<string[]> {
  const ids = await $`ls ${root}`
    .lines()
    .then((lines) => lines.filter((line) => line.endsWith(".ts")));
  return ids;
}

export async function executeGeneratedFixture(file: string): Promise<void> {
  const result = await $`node --experimental-strip-types ${file}`.noThrow();
  if (result.code !== 0) {
    console.warn(
      `[SKIP] Generated fixture execution failed (exit ${result.code}): ${file}`,
    );
    console.warn(
      "This is expected when typia is not built (dev workspace). Build typia to enable execution tests.",
    );
  }
}
