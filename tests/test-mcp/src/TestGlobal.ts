export namespace TestGlobal {
  /**
   * Reads the values that follow a command-line flag up to the next flag.
   *
   * @evidence contracts/testing.md#behavioral-verification getArguments only parses process arguments for the include and exclude filters; it asserts nothing about typia and a wrong parse changes which cases run, not any verdict.
   * @evidence contracts/testing.md#independent-expectations It has no expectation of its own; the filter semantics are those of DynamicExecutor include and exclude names.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; absent flags and repeated flags are handled by its loop without a dedicated test.
   * @evidence contracts/testing.md#execution-ownership It runs inside the test-mcp start process (DynamicExecutor under ttsx with the native typia plugin) and is called in process by the cases that import it; it starts no process of its own.
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
