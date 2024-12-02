export const __notationUnsnake =
  (props: {
    plain: (str: string) => string;
    snake: (str: string, index: number) => string;
  }) =>
  (str: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prefix: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === "_") prefix += "_";
      else break;
    }
    if (prefix.length !== 0) str = str.substring(prefix.length);

    const out = (s: string) => `${prefix}${s}`;
    if (str.length === 0) return out("");

    const items: string[] = str.split("_").filter((s) => s.length !== 0);
    return items.length === 0
      ? out("")
      : items.length === 1
        ? out(props.plain(items[0]!))
        : out(items.map(props.snake).join(""));
  };
