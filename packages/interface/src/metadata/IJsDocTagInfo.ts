/**
 * JSDoc tag information extracted from TypeScript source.
 *
 * Represents a single JSDoc tag like `@param`, `@returns`, `@deprecated`, etc.
 * Used throughout typia's metadata system to preserve documentation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation A tag is a name without the `@` and an optional list of text segments, which is the shape TypeScript's own JSDoc tag info takes, so tag payloads that mix text, names and links keep their segment kinds. `text` is optional because a tag such as `@deprecated` may have no payload.
 * @evidence contracts/common.md#clear-and-simple-design A two-field interface with its segment type nested in the same-named namespace, where only this record uses it.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It copies the compiler's documented tag shape and does not parse or reinterpret tag text.
 * @evidence contracts/common.md#meaningful-documentation The comment says the record preserves one JSDoc tag in the metadata system and gives name and text examples.
 */
export interface IJsDocTagInfo {
  /** Tag name without `@` prefix (e.g., `"param"`, `"returns"`). */
  name: string;

  /** Tag text content, if any. */
  text?: IJsDocTagInfo.IText[];
}
export namespace IJsDocTagInfo {
  /**
   * Text segment within a JSDoc tag.
   *
   * @evidence contracts/common.md#principled-implementation Each segment pairs the text with a free-form `kind` string, mirroring the compiler's display-part kinds; kind is a string rather than a closed union because the set belongs to the compiler.
   * @evidence contracts/common.md#clear-and-simple-design Two required fields and no behavior.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not interpret the kind.
   * @evidence contracts/common.md#meaningful-documentation The comment states that this is a text segment and the field comments give example kinds.
   */
  export interface IText {
    /** Text content. */
    text: string;

    /** Text kind (e.g., `"text"`, `"parameterName"`). */
    kind: string;
  }
}
