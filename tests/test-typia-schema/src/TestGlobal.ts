/**
 * Supplies schema-suite paths and command-line selection arguments.
 *
 * The DynamicExecutor entry owns case discovery, execution and verdicts; this
 * class only supplies its selection inputs and does not assert product
 * behavior.
 */
export class TestGlobal {
  public static readonly ROOT: string = `${__dirname}/..`;

  /**
   * Reads all values after the first requested double-dash flag, stopping at
   * the next flag. A missing flag returns an empty list.
   *
   * The first matching flag starts a slice ending before the next double-dash
   * argument. Two index searches and one slice preserve that policy without
   * changing process.argv or retaining selection state between calls.
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
