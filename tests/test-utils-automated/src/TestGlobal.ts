import fs from "fs";
import path from "path";

export class TestGlobal {
  public static readonly ROOT: string = resolveTestRoot();

  /**
   * Reads all values after the first requested double-dash flag, stopping at
   * the next flag. A missing flag returns null.
   *
   * @evidence contracts/common.md#principled-implementation The first matching flag starts a slice ending before the next double-dash argument. An absent flag returns null, allowing the caller to choose its default filter.
   * @evidence contracts/common.md#clear-and-simple-design Two index searches and one slice expose the first-occurrence policy without changing process.argv or holding filter state between calls.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The parser uses argv values and the requested flag spelling; it reads no fixture contents and cannot manufacture a test verdict.
   * @evidence contracts/common.md#meaningful-documentation Native prose states first-occurrence, multi-value and absent-flag behavior so callers can distinguish default selection from an explicitly empty filter.
   */
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
    return pack.name === "@typia/test-utils-automated";
  } catch {
    return false;
  }
}
