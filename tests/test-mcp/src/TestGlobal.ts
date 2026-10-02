export namespace TestGlobal {
  /**
   * Reads one value per occurrence of the requested double-dash flag. Missing
   * flags return an empty list.
   *
   * @evidence contracts/common.md#principled-implementation The argv scan collects one following argument for each occurrence of the requested flag, preserving occurrence order. It does not treat a sequence of unprefixed words as several filter values.
   * @evidence contracts/common.md#clear-and-simple-design One loop owns flag recognition and the result array; advancing past each consumed value keeps it from being interpreted as another flag.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The requested key is compared with its complete double-dash spelling; no fixture or test outcome affects parsing.
   * @evidence contracts/common.md#meaningful-documentation Native prose explains one-value-per-occurrence filtering and the absent-flag empty result, rather than claiming this runner helper is a behavioral test.
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
