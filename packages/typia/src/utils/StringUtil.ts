export namespace StringUtil {
  export const capitalize = (str: string) =>
    str.length ? str[0]!.toUpperCase() + str.slice(1).toLowerCase() : str;

  export const escapeDuplicate = (props: {
    keep: string[];
    input: string;
    escape?: (str: string) => string;
  }): string =>
    props.keep.includes(props.input)
      ? escapeDuplicate({
          keep: props.keep,
          input: (props.escape ?? ((str) => `_${str}`))(props.input),
        })
      : props.input;
}
