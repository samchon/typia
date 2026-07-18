import typia from "typia";

// The JSDoc path must enforce the same exclusivity as the type tags: Format and
// Pattern both declare `exclusive: ["format", "pattern"]`, so `@format` and
// `@pattern` on one property is a compile error, just as
// `string & Format<"email"> & Pattern<"^x">` is.
interface IValue {
  /**
   * @format email
   * @pattern ^x
   */
  value: string;
}
typia.createIs<IValue>();
