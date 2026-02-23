<<<<<<< HEAD
export interface IJsDocTagInfo {
  name: string;
  text?: IJsDocTagInfo.IText[];
}
export namespace IJsDocTagInfo {
  export interface IText {
    text: string;
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    kind: string;
  }
}
