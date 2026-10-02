import fs from "fs";
import path from "path";

/**
 * Resolves the suite root and reads runner filters without retaining
 * selections.
 *
 * @evidence contracts/testing.md#behavioral-verification Supplies the package root and include/exclude argv slices to main and generation. It performs no assertion; validation paths and fatal status are asserted by the registered cases.
 * @evidence contracts/testing.md#independent-expectations The package identity locates the owning workspace and requested double-dash flags define filters. Neither helper calculates expected schema reports.
 * @evidence contracts/testing.md#distinguishing-cases Root resolution tries cwd, module parent and cwd ancestors; argv parsing distinguishes absent and explicitly empty flags. Generated cases own clean, spoiled and surplus-value distinctions.
 * @evidence contracts/testing.md#execution-ownership main and TestAutomation consume this support class during suite start; generate also consumes ROOT during preparation. Private root helpers own filesystem discovery and are not independently registered cases.
 */
export class TestGlobal {
  public static readonly ROOT: string = resolveTestRoot();

  /**
   * Reads all values after the first requested double-dash flag, stopping at
   * the next flag. A missing flag returns null.
   *
   * @evidence contracts/testing.md#behavioral-verification Supplies the first requested flag's values to main's include/exclude filters. No behavioral assertion occurs in this parser; the servant reports the selected test entries' assertions.
   * @evidence contracts/testing.md#independent-expectations Requested flag spelling and argv delimiters define the slice, independently of schema or validator results. This helper supplies selection inputs rather than an assertion oracle.
   * @evidence contracts/testing.md#distinguishing-cases An absent flag returns null; an empty flag returns an empty array; one or multiple values end at the next double-dash argument. main defaults absence to an unrestricted filter.
   * @evidence contracts/testing.md#execution-ownership The parent suite main calls this support method before its single servant request. It launches no native compiler or child process and registers no separate case.
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
