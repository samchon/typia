import typia from "typia";

// Format declares `exclusive: ["format", "pattern"]`, naming its own kind, so
// two `@format` tags on one property are forbidden: the emitted schema keeps one
// `format` while the generated validator enforces both.
interface IValue {
  /**
   * @format uuid
   * @format email
   */
  value: string;
}
typia.createIs<IValue>();
