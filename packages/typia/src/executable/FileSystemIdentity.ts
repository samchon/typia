import fs from "fs";
import path from "path";

export namespace FileSystemIdentity {
  export interface IIdentity {
    readonly caseSensitive: boolean;
    contains(file: string, directory: string): boolean;
    filesystemKey(file: string): string;
    isDeclarationFile(file: string): boolean;
    isSamePath(x: string, y: string): boolean;
    isSupportedExtension(file: string): boolean;
    projectFileKey(file: string): string;
  }

  export function create(
    caseSensitive: boolean,
    pathApi: typeof path.posix = path,
  ): IIdentity {
    const fold = (value: string): string =>
      caseSensitive ? value : value.toLowerCase();
    const filesystemKey = (file: string): string =>
      fold(pathApi.normalize(file));
    return {
      caseSensitive,
      contains: (file, directory) => {
        const fileKey: string = filesystemKey(pathApi.resolve(file));
        const directoryKey: string = filesystemKey(pathApi.resolve(directory));
        const prefix: string = directoryKey.endsWith(pathApi.sep)
          ? directoryKey
          : `${directoryKey}${pathApi.sep}`;
        return fileKey === directoryKey || fileKey.startsWith(prefix);
      },
      filesystemKey,
      isDeclarationFile: (file) =>
        DTS_PATTERN.test(fold(pathApi.basename(file))),
      isSamePath: (x, y) => filesystemKey(x) === filesystemKey(y),
      isSupportedExtension: (file) => {
        const filename: string = fold(pathApi.basename(file));
        return (
          TS_PATTERN.test(filename) && DTS_PATTERN.test(filename) === false
        );
      },
      projectFileKey: fold,
    };
  }

  export class Policy {
    private caseSensitive_: boolean | undefined;
    private location_: string | undefined;

    public observe(caseSensitive: boolean | undefined, location: string): void {
      if (caseSensitive === undefined) return;
      if (this.caseSensitive_ === undefined) {
        this.caseSensitive_ = caseSensitive;
        this.location_ = location;
      } else if (this.caseSensitive_ !== caseSensitive) {
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): inconsistent filesystem case behavior between ${this.location_} and ${location}.`,
        );
      }
    }

    public get(): IIdentity {
      if (this.caseSensitive_ === undefined) {
        throw new URIError(
          "Error on TypiaGenerateWizard.generate(): unable to determine filesystem case behavior for this run.",
        );
      }
      return create(this.caseSensitive_);
    }
  }

  export async function inspectDirectory(
    directory: string,
  ): Promise<boolean | undefined> {
    const names: string[] = await fs.promises.readdir(directory);
    const entries: Set<string> = new Set(names);
    for (const name of names) {
      const alternate: string | undefined = alternateCase(name);
      if (alternate === undefined) continue;
      if (entries.has(alternate)) return true;
      try {
        await fs.promises.lstat(path.join(directory, alternate));
        return false;
      } catch (error) {
        if (isMissingFileError(error)) return true;
        throw error;
      }
    }
    return undefined;
  }

  export async function probeDirectory(directory: string): Promise<boolean> {
    const inspected: boolean | undefined = await inspectDirectory(directory);
    if (inspected !== undefined) return inspected;

    for (let attempt = 0; attempt < 10; ++attempt) {
      const name: string =
        `.typia-case-probe-${process.pid}-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}`.toLowerCase();
      const original: string = path.join(directory, name);
      const alternate: string = path.join(directory, name.toUpperCase());
      let handle: fs.promises.FileHandle;
      try {
        handle = await fs.promises.open(original, "wx");
      } catch (error) {
        if (isAlreadyExistsError(error)) continue;
        throw new URIError(
          `Error on TypiaGenerateWizard.generate(): unable to probe filesystem case behavior at ${directory}: ${formatUnknownError(error)}`,
        );
      }
      let closed: boolean = false;
      try {
        await handle.close();
        closed = true;
        try {
          await fs.promises.lstat(alternate);
          return false;
        } catch (error) {
          if (isMissingFileError(error)) return true;
          throw error;
        }
      } finally {
        let cleanupError: unknown;
        if (closed === false) {
          try {
            await handle.close();
          } catch (error) {
            cleanupError = error;
          }
        }
        try {
          await fs.promises.unlink(original);
        } catch (error) {
          if (isMissingFileError(error) === false) cleanupError ??= error;
        }
        if (cleanupError !== undefined) {
          throw new URIError(
            `Error on TypiaGenerateWizard.generate(): unable to clean filesystem case probe ${original}: ${formatUnknownError(cleanupError)}`,
          );
        }
      }
    }
    throw new URIError(
      `Error on TypiaGenerateWizard.generate(): unable to reserve a filesystem case probe at ${directory}.`,
    );
  }

  function alternateCase(name: string): string | undefined {
    let changed: boolean = false;
    let output: string = "";
    for (const character of name) {
      if (character >= "a" && character <= "z") {
        output += character.toUpperCase();
        changed = true;
      } else if (character >= "A" && character <= "Z") {
        output += character.toLowerCase();
        changed = true;
      } else output += character;
    }
    return changed ? output : undefined;
  }

  function isAlreadyExistsError(error: unknown): boolean {
    return (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "EEXIST"
    );
  }

  /**
   * Builds the key that decides whether two paths are the same filesystem
   * object.
   *
   * The identity is read from `fs.BigIntStats` rather than `fs.Stats`, because
   * `fs.Stats.ino` is a JavaScript number. An NTFS file ID is
   * `(sequenceNumber << 48) | mftRecordIndex` and routinely exceeds
   * `Number.MAX_SAFE_INTEGER` — in a 4000-directory probe, 1879 of them did —
   * where the spacing between representable doubles is 8 or more. Two entries
   * sharing a sequence number with MFT record indices within that spacing round
   * to one double. The traversal callers would then treat a distinct directory
   * or file as already visited and skip it with no diagnostic, and the overwrite
   * guard would refuse a legitimate output (samchon/typia#2269).
   *
   * A filesystem that reports no inode at all keeps the canonical path fallback,
   * which is the only identity available there.
   *
   * @param stat Stats read with `{ bigint: true }`.
   * @param realpath Canonical path of the same object.
   * @returns Key that is equal for two paths only when they are one object.
   */
  export function identityKey(
    stat: Pick<fs.BigIntStats, "dev" | "ino">,
    realpath: string,
  ): string {
    // `BigInt(0)` rather than `0n`: this package compiles at ES2016, where a
    // BigInt literal is a syntax error, while the constructor and the `bigint`
    // type are fine.
    return stat.ino === BigInt(0)
      ? `path:${path.normalize(realpath)}`
      : `inode:${stat.dev}:${stat.ino}`;
  }

  function isMissingFileError(error: unknown): boolean {
    return (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    );
  }

  function formatUnknownError(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
  }
}

const TS_PATTERN = /\.[cm]?tsx?$/;
const DTS_PATTERN = /\.d\.[cm]?tsx?$/;
