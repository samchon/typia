export namespace StringUtil {
    export const capitalize = (str: string) =>
        str[0]!.toUpperCase() + str.slice(1);

    export const localize = (str: string) =>
        str[0]!.toLowerCase() + str.slice(1);
}
