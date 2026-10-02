/**
 * Escapes a candidate until it no longer collides with retained names.
 *
 * @internal
 */
export namespace StringUtil {
  /**
   * Returns the first candidate absent from `keep`.
   *
   * The default escape prepends an underscore. A supplied escape must reach an
   * absent candidate after finitely many calls; its exceptions propagate.
   */
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
