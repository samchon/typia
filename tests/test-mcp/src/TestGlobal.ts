/**
 * Command-line filters for the integration runner.
 *
 * @evidence contracts/testing.md#behavioral-verification This runner support namespace owns getArguments, which supplies include and exclude values to DynamicExecutor; it is not an assertion-bearing case.
 * @evidence contracts/testing.md#independent-expectations Double-dash keys and one following value per occurrence define the runner input convention independently of test outcomes.
 * @evidence contracts/testing.md#distinguishing-cases Absent flags yield no filters; repeated flags retain their value order. Test case assertions remain in the discovered feature exports.
 * @evidence contracts/testing.md#execution-ownership src/index.ts calls getArguments before DynamicExecutor discovers integration cases; node:test unit registration does not use these filters.
 */
export namespace TestGlobal {
  /**
   * Reads one value per occurrence of the requested double-dash flag. Missing
   * flags return an empty list.
   *
   * @evidence contracts/testing.md#behavioral-verification The runner consumes these returned values to select DynamicExecutor entries; this helper owns no separate behavioral assertions.
   * @evidence contracts/testing.md#independent-expectations Exact double-dash spelling and one following value per occurrence establish the filter convention; parsing does not depend on a case's result.
   * @evidence contracts/testing.md#distinguishing-cases The scan preserves repeated values and returns an empty list for an absent flag or a final flag without a following value.
   * @evidence contracts/testing.md#execution-ownership src/index.ts calls this exported helper for include and exclude before running the integration population. The helper remains support code rather than a separately registered case.
   */
  export const getArguments = (key: string): string[] => {
    const values: string[] = [];
    for (let i = 0; i < process.argv.length; i++) {
      const arg = process.argv[i];
      if (arg === `--${key}` && i + 1 < process.argv.length) {
        values.push(process.argv[++i]!);
      }
    }
    return values;
  };
}
