import { NamingConvention } from "./NamingConvention";

export namespace EndpointUtil {
  export const capitalize = (str: string): string =>
    str.length !== 0 ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str;

  export const pascal = (path: string): string =>
    splitWithNormalization(path)
      .filter((str) => str[0] !== "{")
      .map(NamingConvention.pascal)
      .join("");

  export const splitWithNormalization = (path: string): string[] =>
    path
      .split("/")
      .map((str) => normalize(str.trim()))
      .filter((str) => !!str.length);

  export const reJoinWithDecimalParameters = (path: string) => {
    path = path
      .split("/")
      .map((str) =>
        str[0] === "{" && str[str.length - 1] === "}"
          ? `:${str.substring(1, str.length - 1)}`
          : str,
      )
      .join("/");
    return `${path.startsWith("/") ? "" : "/"}${path}`;
  };

  export const normalize = (str: string): string => {
    str = str.split(".").join("_").split("-").join("_").trim();
    if (RESERVED.has(str)) return `_${str}`;
    else if (str.length !== 0 && "0" <= str[0] && str[0] <= "9")
      str = `_${str}`;
    return str;
  };

  export const escapeDuplicate =
    (keep: string[]) =>
    (change: string): string =>
      keep.includes(change) ? escapeDuplicate(keep)(`_${change}`) : change;
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
