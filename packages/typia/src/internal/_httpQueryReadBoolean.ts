/**
 * Read one query value as a boolean.
 *
 * A missing value is absent, an empty value is true, `true` and `1` are true,
 * `false` and `0` are false, `null` is null and other text is kept for the
 * assertion to reject.
 *
 * @evidence contracts/common.md#principled-implementation A missing or undefined value is absent, `null` is null, an empty value is true (a present flag), `true` and `1` are true, `false` and `0` are false and other text is returned for the validator to reject; `undefined` is treated like null so a stand-in reader does not throw.
 * @evidence contracts/common.md#clear-and-simple-design One conditional chain.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The mapping is the query contract.
 * @evidence contracts/common.md#meaningful-documentation A comment states the mapping.
 */
export const _httpQueryReadBoolean = (
  str: string | null,
): boolean | null | undefined =>
  // `undefined` is as absent as `null`, which the contract returns; a
  // stand-in reader that answers `undefined` must not throw on `.length`.
  str === null || str === undefined
    ? undefined
    : str === "null"
      ? null
      : str.length === 0
        ? true
        : str === "true" || str === "1"
          ? true
          : str === "false" || str === "0"
            ? false
            : (str as any); // wrong type
