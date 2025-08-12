import { StringUtil } from "./StringUtil";

export namespace NamingConvention {
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

  const unkebab =
    (props: {
      plain: (str: string) => string;
      kebab: (str: string, index: number) => string;
    }) =>
    (str: string): string => {
      // Handle leading hyphens (preserve them as prefix)
      let prefix: string = "";
      for (let i: number = 0; i < str.length; i++) {
        if (str[i] === "-") prefix += "-";
        else break;
      }
      if (prefix.length !== 0) str = str.substring(prefix.length);

      const out = (s: string) => `${prefix}${s}`;
      if (str.length === 0) return out("");

      const items: string[] = str.split("-").filter((s) => s.length !== 0);
      return items.length === 0
        ? out("")
        : items.length === 1
          ? out(props.plain(items[0]!))
          : out(items.map(props.kebab).join(""));
    };

  export function snake(str: string): string {
    if (str.length === 0) return str;

    // PREFIX
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prefix: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === "_" || str[i] === "-") prefix += str[i];
      else break;
    }
    if (prefix.length !== 0) str = str.substring(prefix.length);

    const out = (s: string) => `${prefix}${s}`;

    // KEBAB CASE - convert to snake case
    if (str.includes("-")) {
      const items: string[] = str.split("-");
      return out(items.map((s) => s.toLowerCase()).join("_"));
    }

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

  export function camel(str: string) {
    // Handle kebab-case input
    if (str.includes("-")) {
      return unkebab({
        plain: (str) =>
          str.length
            ? str === str.toUpperCase()
              ? str.toLocaleLowerCase()
              : `${str[0]!.toLowerCase()}${str.substring(1)}`
            : str,
        kebab: (str, i) =>
          i === 0 ? str.toLowerCase() : StringUtil.capitalize(str.toLowerCase()),
      })(str);
    }
    
    return unsnake({
      plain: (str) =>
        str.length
          ? str === str.toUpperCase()
            ? str.toLocaleLowerCase()
            : `${str[0]!.toLowerCase()}${str.substring(1)}`
          : str,
      snake: (str, i) =>
        i === 0 ? str.toLowerCase() : StringUtil.capitalize(str.toLowerCase()),
    })(str);
  }

  export function pascal(str: string) {
    // Handle kebab-case input
    if (str.includes("-")) {
      return unkebab({
        plain: (str) =>
          str.length ? `${str[0]!.toUpperCase()}${str.substring(1)}` : str,
        kebab: StringUtil.capitalize,
      })(str);
    }
    
    return unsnake({
      plain: (str) =>
        str.length ? `${str[0]!.toUpperCase()}${str.substring(1)}` : str,
      snake: StringUtil.capitalize,
    })(str);
  }

  export function kebab(str: string): string {
    if (str.length === 0) return str;

    // PREFIX (handle leading hyphens and underscores)
    let prefix: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === "-" || str[i] === "_") prefix += str[i];
      else break;
    }
    if (prefix.length !== 0) str = str.substring(prefix.length);

    const out = (s: string) => `${prefix}${s}`;

    // Handle snake_case input
    if (str.includes("_")) {
      const items: string[] = str.split("_");
      return out(items.map((s) => s.toLowerCase()).join("-"));
    }

    // Handle kebab-case input (already kebab)
    if (str.includes("-")) {
      const items: string[] = str.split("-");
      return out(items.map((s) => s.toLowerCase()).join("-"));
    }

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
    if (indexes.length === 0) return out(str.toLowerCase());

    let ret: string = "";
    for (let i: number = 0; i < indexes.length; i++) {
      const first: number = i === 0 ? 0 : indexes[i - 1]!;
      const last: number = indexes[i]!;

      ret += str.substring(first, last).toLowerCase();
      ret += "-";
    }
    ret += str.substring(indexes[indexes.length - 1]!).toLowerCase();
    return out(ret);
  }
}
