import typia from "typia";

// Pattern declares `exclusive: ["format", "pattern"]`, naming its own kind, so
// two `@pattern` tags on one property are forbidden. Left unenforced, this
// emitted `{"pattern": "^b"}` while the validator ANDs both regexes, so
// `is({ value: "b" })` returned false against a schema typia itself emitted.
interface IValue {
  /**
   * @pattern ^a
   * @pattern ^b
   */
  value: string;
}
typia.createIs<IValue>();
