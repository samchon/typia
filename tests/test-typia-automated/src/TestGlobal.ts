import fs from "fs";
import path from "path";

/**
 * Resolves this test workspace and parses the suite's substring filter flags.
 *
 * Root resolution follows package identity from the working/module location;
 * command arguments retain the first occurrence of each requested flag.
 *
 * @evidence contracts/testing.md#behavioral-verification This helper supplies root and filters without reporting product verdicts. main passes its parsed values to TestServant/native profiles, and the controller uses ROOT to generate only this workspace's feature tree.
 * @evidence contracts/testing.md#independent-expectations The fixture package's authored name establishes root identity, and process.argv supplies explicit caller filter values. Neither root discovery nor parsing derives expected callback results from the product.
 * @evidence contracts/testing.md#distinguishing-cases Missing flags return null and present flags may have zero/multiple values until the next double-dash flag. Private root resolution tries working/module candidates, then ancestors and a module fallback; unreadable/nonmatching manifests are rejected as candidates rather than changing case verdicts.
 * @evidence contracts/testing.md#execution-ownership main consumes getArguments for include/exclude; the controller, regressions and native-profile runner consume ROOT. Private resolveTestRoot/isTestPackageRoot and findIndex callback belong to this helper, with no separate test registration.
 */
export class TestGlobal {
  public static readonly ROOT: string = resolveTestRoot();

  /**
   * Reads all values after the first requested double-dash flag, stopping at
   * the next flag. A missing flag returns null.
   *
   * @evidence contracts/testing.md#behavioral-verification This preparation parser returns an argument slice, not a test verdict. main hands include/exclude values to the actual executors; their named callbacks retain assertions and failure identities.
   * @evidence contracts/testing.md#independent-expectations Requested flag spelling and process.argv determine returned values independently of callback output. Missing null lets main choose the default empty filter; repeated occurrences intentionally use the first one.
   * @evidence contracts/testing.md#distinguishing-cases Absent, present-empty and present-multiple-value flags are distinct; parsing stops at the next double-dash argument or argument end. This helper does not interpret option meaning or independently assert every parser boundary.
   * @evidence contracts/testing.md#execution-ownership main explicitly invokes getArguments for both filters. The local next-flag predicate and slice belong to this operation; product case selection/verdict remains with TestServant and runNativeProfiles.
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
    return pack.name === "@typia/test-typia-automated";
  } catch {
    return false;
  }
}
