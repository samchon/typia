import * as fs from "fs";
import * as os from "os";
import * as path from "path";

export class TestGlobal {
  /** Absolute path to `tests/test-typia-ttsc/`. */
  public static readonly ROOT: string = path.resolve(`${__dirname}/..`);

  /** Absolute path to the installed ttsc helper binary. */
  public static readonly TTSC_BINARY: string | null = resolveTtscBinary();

  /** Absolute path to the workspace-linked public ttsc launcher. */
  public static readonly TTSC_LAUNCHER: string = path.resolve(
    `${__dirname}/../node_modules/.bin/${process.platform === "win32" ? "ttsc.cmd" : "ttsc"}`,
  );

  /** Absolute path to the workspace-linked ttsx launcher. */
  public static readonly TTSX_BINARY: string = path.resolve(
    `${__dirname}/../node_modules/.bin/${process.platform === "win32" ? "ttsx.cmd" : "ttsx"}`,
  );

  /** Shared source-plugin cache for this test process. */
  public static readonly TTSC_CACHE_DIR: string = fs.mkdtempSync(
    path.join(os.tmpdir(), "typia-ttsc-cache-"),
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

function resolveTtscBinary(): string | null {
  const explicit: string | undefined = process.env.TTSC_BINARY;
  if (explicit !== undefined && path.isAbsolute(explicit)) {
    return explicit;
  }
  try {
    return require.resolve(
      `@ttsc/${process.platform}-${process.arch}/bin/${
        process.platform === "win32" ? "ttsc.exe" : "ttsc"
      }`,
    );
  } catch {
    return null;
  }
}
