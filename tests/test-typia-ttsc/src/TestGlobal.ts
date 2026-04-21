import * as path from "path";

export class TestGlobal {
  /** Absolute path to `tests/test-typia-ttsc/`. */
  public static readonly ROOT: string = path.resolve(`${__dirname}/..`);

  /** Absolute path to the compiled Go binary. */
  public static readonly TTSC_BINARY: string = path.resolve(
    `${__dirname}/../../../packages/ttsc/bin/ttsc-native`,
  );

  /** Absolute path to the workspace-linked ttsx launcher. */
  public static readonly TTSX_BINARY: string = path.resolve(
    `${__dirname}/../node_modules/.bin/${process.platform === "win32" ? "ttsx.cmd" : "ttsx"}`,
  );

  /** Mirror of the helper used by the rest of the typia test suite. */
  public static getArguments(type: string): string[] {
    const from: number = process.argv.indexOf(`--${type}`) + 1;
    if (from === 0) return [];
    const to: number = process.argv
      .slice(from)
      .findIndex((str) => str.startsWith("--"), from);
    return process.argv.slice(
      from,
      to === -1 ? process.argv.length : to + from,
    );
  }
}
