/**
 * Supplies schema-suite paths and command-line selection arguments.
 *
 * The DynamicExecutor entry owns case discovery, execution and verdicts; this
 * class only supplies its selection inputs and does not assert product
 * behavior.
 *
 * @evidence contracts/testing.md#behavioral-verification This maintained runner helper reads the suite root and CLI filter arguments; it makes no assertions and cannot supply a passing case verdict.
 * @evidence contracts/testing.md#independent-expectations The CLI spelling --include/--exclude and process argument order define selection inputs; product expectations belong to the individually discovered cases.
 * @evidence contracts/testing.md#distinguishing-cases getArguments distinguishes absent flags, empty values and a following double-dash flag. These are parser branches, not independently executed regression assertions in this class.
 * @evidence contracts/testing.md#execution-ownership src/index.ts main consumes getArguments for DynamicExecutor's filter; the class is maintained support rather than a separately registered test case.
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
   *
   * @evidence contracts/testing.md#behavioral-verification This helper returns CLI argument slices to the runner; it reads no case contents and supplies no product assertion or test verdict.
   * @evidence contracts/testing.md#independent-expectations The requested double-dash flag spelling and argv order define the result; this parser does not derive any case's expected product output.
   * @evidence contracts/testing.md#distinguishing-cases An absent flag returns [], an empty flag has no values, a later flag ends the slice, and repeated flags use the first occurrence. The helper itself owns no regression assertions for those branches.
   * @evidence contracts/testing.md#execution-ownership src/index.ts main calls this method for include/exclude before invoking DynamicExecutor; it is maintained runner support, not a discovered case.
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
