/** @internal */
export namespace StringUtil {
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
