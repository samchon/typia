export namespace NamingConvention {
  export function camel(str: string) {
    return unsnake({
      plain: (str) =>
        str.length
          ? str === str.toUpperCase()
            ? str.toLocaleLowerCase()
            : `${str[0]!.toLowerCase()}${str.substring(1)}`
          : str,
      snake: (str, i) =>
        i === 0 ? str.toLowerCase() : capitalize(str.toLowerCase()),
    })(str);
  }

  export function pascal(str: string) {
    return unsnake({
      plain: (str) =>
        str.length ? `${str[0]!.toUpperCase()}${str.substring(1)}` : str,
      snake: capitalize,
    })(str);
  }

  export function snake(str: string): string {
    if (str.length === 0) return str;

    // PREFIX
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prefix: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === "_") prefix += "_";
      else break;
    }
    if (prefix.length !== 0) str = str.substring(prefix.length);

    const out = (s: string) => `${prefix}${s}`;

    // SNAKE CASE
    const items: string[] = str.split("_");
    if (items.length > 1)
      return out(items.map((s) => s.toLowerCase()).join("_"));

    // CAMEL OR PASCAL CASE
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
    return out(ret);
  }

  export const capitalize = (str: string): string =>
    str.length !== 0 ? str[0]!.toUpperCase() + str.slice(1) : str;

  export const localize = (str: string) => str[0]!.toLowerCase() + str.slice(1);

  export const variable = (str: string): boolean =>
    reserved(str) === false && /^[a-zA-Z_$][a-zA-Z_$0-9]*$/g.test(str);

  export const reserved = (str: string): boolean => RESERVED.has(str);
}

const RESERVED: Set<string> = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "module",
  "new",
  "null",
  "package",
  "public",
  "private",
  "protected",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
]);

const unsnake =
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
