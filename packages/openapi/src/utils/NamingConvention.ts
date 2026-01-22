export namespace NamingConvention {
  export function snake(str: string): string {
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
  }

  export function camel(str: string): string {
    return unsnake((str: string) => {
      if (str.length === 0) return str;
      else if (str[0] === str[0]!.toUpperCase())
        return str[0]!.toLowerCase() + str.substring(1);
      else return str;
    })(str);
  }

  export function pascal(str: string): string {
    return unsnake((str: string) => {
      if (str.length === 0) return str;
      else if (str[0] === str[0]!.toLowerCase())
        return str[0]!.toUpperCase() + str.substring(1);
      else return str;
    })(str);
  }

  const unsnake =
    (escaper: (str: string) => string) =>
    (str: string): string => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let prefix: string = "";
      for (let i: number = 0; i < str.length; i++) {
        if (str[i] === "_") prefix += "_";
        else break;
      }
      if (prefix.length !== 0) str = str.substring(prefix.length);

      const indexes: [number, number][] = [];
      for (let i: number = 0; i < str.length; i++) {
        const ch: string = str[i]!;
        if (ch !== "_") continue;

        const last = indexes[indexes.length - 1];
        if (last === undefined || last[0] + last[1] !== i) indexes.push([i, 1]);
        else ++last[1];
      }
      if (indexes.length === 0) return prefix + escaper(str);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let ret: string = "";
      for (let i: number = 0; i < indexes.length; i++) {
        const [first] = indexes[i]!;
        if (i === 0)
          if (first === 0) ret += "_";
          else ret += str.substring(0, first);
        else {
          const [prevFirst, prevLength] = indexes[i - 1]!;
          const piece: string = str.substring(prevFirst + prevLength, first);
          if (piece.length) ret += capitalize(piece);
        }
      }
      const last = indexes[indexes.length - 1]!;
      const piece: string = str.substring(last[0] + last[1]);
      if (last.length) ret += capitalize(piece);
      return prefix + escaper(ret);
    };

  export const capitalize = (str: string): string =>
    str.length !== 0 ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str;

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
