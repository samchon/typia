import typia from "typia";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";
export const test_createEquals_ObjectHttpUndefindable = _test_equals(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (
    input: any,
    _exceptionable: boolean = true,
  ): input is ObjectHttpUndefindable => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
        "two" === input.constantString) &&
      (0 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            [
              "boolean",
              "bigint",
              "number",
              "string",
              "constantBoolean",
              "constantBigint",
              "constantNumber",
              "constantString",
            ].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return (
      "object" === typeof input &&
      null !== input &&
      false === Array.isArray(input) &&
      $io0(input, true)
    );
  },
);
