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
