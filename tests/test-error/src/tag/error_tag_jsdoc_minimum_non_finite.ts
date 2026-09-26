import typia from "typia";

// A JSON Schema `minimum` must be a JSON number, and JSON has no infinity. The
// emitter used to print the parsed value as `+Inf`, so the generated validator
// threw `ReferenceError: Inf is not defined` on its first run (#2452).
interface IValue {
  /** @minimum Infinity */
  value: number;
}
typia.createIs<IValue>();
