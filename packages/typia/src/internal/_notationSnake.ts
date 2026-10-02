const _notationSnakeWord = (str: string): string => {
  const indexes: number[] = [];
  for (let i: number = 0; i < str.length; i++) {
    const code: number = str.charCodeAt(i);
    if (65 <= code && code <= 90) indexes.push(i);
  }
  for (let i: number = indexes.length - 1; i > 0; --i) {
    const now: number = indexes[i]!;
    const prev: number = indexes[i - 1]!;
    if (now - prev === 1) indexes.splice(i, 1);
  }
  if (indexes.length !== 0 && indexes[0] === 0) indexes.splice(0, 1);
  if (indexes.length === 0) return str.toLowerCase();

  let ret: string = "";
  for (let i: number = 0; i < indexes.length; i++) {
    const first: number = i === 0 ? 0 : indexes[i - 1]!;
    const last: number = indexes[i]!;

    ret += str.substring(first, last).toLowerCase();
    ret += "_";
  }
  ret += str.substring(indexes[indexes.length - 1]!).toLowerCase();
  return ret;
};

/**
 * Convert a key to snake_case.
 *
 * Leading underscores are kept and the word boundaries are found inside each
 * underscore-delimited segment, with consecutive capitals collapsed into one
 * word.
 *
 * @evidence contracts/common.md#principled-implementation Leading underscores are kept, each underscore-delimited segment is walked at its ASCII capitals with consecutive capitals collapsed into one word, and the lowercased pieces are joined with underscores. Word boundaries follow the ASCII-capital convention also used by SnakeCase; lowercase conversion applies to each complete runtime piece, rather than promising character-by-character Unicode equivalence with the template-literal type. The utilities' converter uses the same runtime algorithm.
 * @evidence contracts/common.md#clear-and-simple-design One function and a private word converter, duplicated in the utilities package, which typia cannot reach from the emitted-code path.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is general over ASCII capitals and no key is special-cased.
 * @evidence contracts/common.md#meaningful-documentation A comment states the boundary rule and the per-segment walk.
 */
export const _notationSnake = (str: string): string => {
  if (str.length === 0) return str;

  // PREFIX
  let prefix: string = "";
  for (let i: number = 0; i < str.length; i++) {
    if (str[i] === "_") prefix += "_";
    else break;
  }
  if (prefix.length !== 0) str = str.substring(prefix.length);

  // SNAKE CASE
  //
  // Run the case-boundary walk within each underscore-delimited segment, not
  // over the whole segment at once. Lowercasing a segment atomically would drop
  // the camelCase boundary inside it (`["fooBar", "baz"]` -> `["foobar", "baz"]`
  // -> `foobar_baz`), diverging from `SnakeCase<T>`; the per-segment walk keeps
  // it (`["foo_bar", "baz"]` -> `foo_bar_baz`).
  return `${prefix}${str.split("_").map(_notationSnakeWord).join("_")}`;
};
