/**
 * Fixture root and command-line filters used by the integration runner.
 *
 * @evidence contracts/testing.md#behavioral-verification This support class supplies the fixture root and include/exclude values to DynamicExecutor; it makes no test assertion or success verdict itself.
 * @evidence contracts/testing.md#independent-expectations Node's source directory and process argv establish the root and requested filter values. Behavioral expectations remain in the exported cases rather than this support class.
 * @evidence contracts/testing.md#distinguishing-cases The parser distinguishes absent flags, explicitly empty values and values ending at the next flag; integration entries own the test inputs selected by those filters.
 * @evidence contracts/testing.md#execution-ownership The test-utils integration main calls this class before DynamicExecutor discovers src/features exports. The class does not execute the unit population or launch a product host.
 */
export class TestGlobal {
  /** Workspace fixture root, one directory above this source directory. */
  public static readonly ROOT: string = `${__dirname}/..`;

  /**
   * Reads all values after the first requested double-dash flag, stopping at
   * the next flag. A missing flag returns an empty list.
   *
   * @evidence contracts/testing.md#behavioral-verification The parser supplies the first flag's values to the integration case filter; it does not inspect fixture data or produce an assertion verdict.
   * @evidence contracts/testing.md#independent-expectations The requested flag spelling and actual argv order establish the returned values, independently of test results.
   * @evidence contracts/testing.md#distinguishing-cases Absent flags yield no values; the first occurrence stops before the next double-dash argument. Those values feed the runner's include/exclude distinction.
   * @evidence contracts/testing.md#execution-ownership The integration main calls this support method in process before its DynamicExecutor invocation.
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
