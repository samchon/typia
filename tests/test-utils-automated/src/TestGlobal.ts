import fs from "fs";
import path from "path";

export class TestGlobal {
  public static readonly ROOT: string = resolveTestRoot();

  public static getArguments(type: string): string[] | null {
    const from: number = process.argv.indexOf(`--${type}`) + 1;
    if (from === 0) {
      return null;
    }
    const to: number = process.argv
      .slice(from)
      .findIndex((str) => str.startsWith("--"), from);
    return process.argv.slice(
      from,
      to === -1 ? process.argv.length : to + from,
    );
  }
}

function resolveTestRoot(): string {
  for (const candidate of [process.cwd(), path.resolve(__dirname, "..")]) {
    if (isTestPackageRoot(candidate)) {
      return candidate;
    }
  }

  let current: string = path.resolve(process.cwd());
  while (true) {
    if (isTestPackageRoot(current)) {
      return current;
    }
    const parent: string = path.dirname(current);
    if (parent === current) {
      return path.resolve(__dirname, "..");
    }
    current = parent;
  }
}

function isTestPackageRoot(candidate: string): boolean {
  try {
    const pack = JSON.parse(
      fs.readFileSync(path.join(candidate, "package.json"), "utf8"),
    ) as { name?: unknown };
    return pack.name === "@typia/test-openapiautomated";
  } catch {
    return false;
  }
}
