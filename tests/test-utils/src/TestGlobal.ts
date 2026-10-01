export class TestGlobal {
  public static readonly ROOT: string = `${__dirname}/..`;

  /**
   * Reads the values that follow a command-line flag up to the next flag.
   *
   * @param type Flag name without its leading dashes.
   *
   * @returns The values after `--type`, or an empty list when the flag is absent.
   *
   * @evidence contracts/testing.md#behavioral-verification This runner helper only parses process arguments for the include and exclude filters; it asserts nothing about typia and a wrong parse changes which cases run, not any verdict.
   * @evidence contracts/testing.md#independent-expectations It has no expectation of its own; the filter semantics are those of DynamicExecutor include and exclude names.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; absent flags and multiple values are handled by its two branches without a dedicated test.
   * @evidence contracts/testing.md#execution-ownership It runs inside the test-utils test:integration process before DynamicExecutor starts and uses no native producer itself.
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
