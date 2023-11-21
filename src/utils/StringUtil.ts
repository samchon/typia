export namespace StringUtil {
  export const capitalize = (str: string) =>
    str.length ? str[0]!.toUpperCase() + str.slice(1) : str;
}
