export namespace AccessorUtil {
  export const reference = (prefix: string): string =>
    prefix
      .split("/")
      .filter((str, i) => !!str.length && !(i === 0 && str === "#"))
      .join(".");
}
