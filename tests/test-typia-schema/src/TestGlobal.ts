export class TestGlobal {
  public static readonly ROOT: string = `${__dirname}/..`;

  /**
   * Reads all values after the first requested double-dash flag, stopping at
   * the next flag. A missing flag returns an empty list.
   *
   * @evidence contracts/common.md#principled-implementation The first matching flag starts a slice ending before the next double-dash argument. An absent flag returns an empty array, allowing the caller to choose its default filter.
   * @evidence contracts/common.md#clear-and-simple-design Two index searches and one slice expose the first-occurrence policy without changing process.argv or holding filter state between calls.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The parser uses argv values and the requested flag spelling; it reads no fixture contents and cannot manufacture a test verdict.
   * @evidence contracts/common.md#meaningful-documentation Native prose states first-occurrence, multi-value and absent-flag behavior so callers can distinguish default selection from an explicitly empty filter.
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
