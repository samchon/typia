/**
 * Fixture root and command-line filters used by the integration runner.
 *
 */
export class TestGlobal {
  /** Workspace fixture root, one directory above this source directory. */
  public static readonly ROOT: string = `${__dirname}/..`;

  /**
   * Reads all values after the first requested double-dash flag, stopping at
   * the next flag. A missing flag returns an empty list.
   *
   */
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
