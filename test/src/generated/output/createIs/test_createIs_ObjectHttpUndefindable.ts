import typia from "typia";
import { _test_is } from "../../../internal/_test_is";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";
export const test_createIs_ObjectHttpUndefindable = _test_is(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (input: any): input is ObjectHttpUndefindable => {
    const $io0 = (input: any): boolean =>
      (undefined === input.boolean || "boolean" === typeof input.boolean) &&
      (undefined === input.bigint || "bigint" === typeof input.bigint) &&
      (undefined === input.number ||
        ("number" === typeof input.number && Number.isFinite(input.number))) &&
      (undefined === input.string || "string" === typeof input.string) &&
      (undefined === input.constantBoolean || true === input.constantBoolean) &&
      (undefined === input.constantBigint ||
        BigInt(1) === input.constantBigint ||
        BigInt(2) === input.constantBigint ||
        BigInt(3) === input.constantBigint) &&
      (undefined === input.constantNumber ||
        1 === input.constantNumber ||
        2 === input.constantNumber ||
        3 === input.constantNumber) &&
      (undefined === input.constantString ||
        "one" === input.constantString ||
        "three" === input.constantString ||
        "two" === input.constantString);
    return (
      "object" === typeof input &&
      null !== input &&
      false === Array.isArray(input) &&
      $io0(input)
    );
  },
);
