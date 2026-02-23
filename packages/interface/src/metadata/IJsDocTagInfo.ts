/**
 * JSDoc tag information extracted from TypeScript source.
 *
 * Represents a single JSDoc tag like `@param`, `@returns`, `@deprecated`, etc.
 * Used throughout typia's metadata system to preserve documentation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IJsDocTagInfo {
  /** Tag name without `@` prefix (e.g., `"param"`, `"returns"`). */
  name: string;

  /** Tag text content, if any. */
  text?: IJsDocTagInfo.IText[];
}
export namespace IJsDocTagInfo {
  /** Text segment within a JSDoc tag. */
  export interface IText {
    /** Text content. */
    text: string;

    /** Text kind (e.g., `"text"`, `"parameterName"`). */
    kind: string;
  }
}
