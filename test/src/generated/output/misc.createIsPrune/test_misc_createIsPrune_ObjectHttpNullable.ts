import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";
export const test_misc_createIsPrune_ObjectHttpNullable = _test_misc_isPrune(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  (input: any): input is ObjectHttpNullable => {
    const is = (input: any): input is ObjectHttpNullable => {
      const $io0 = (input: any): boolean =>
        (null === input.boolean || "boolean" === typeof input.boolean) &&
        (null === input.bigint || "bigint" === typeof input.bigint) &&
        (null === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number) &&
            1 <= input.number)) &&
        (null === input.string || "string" === typeof input.string) &&
        (null === input.constantBoolean || true === input.constantBoolean) &&
        (null === input.constantBigint ||
          BigInt(1) === input.constantBigint ||
          BigInt(2) === input.constantBigint ||
          BigInt(3) === input.constantBigint) &&
        (null === input.constantNumber ||
          1 === input.constantNumber ||
          2 === input.constantNumber ||
          3 === input.constantNumber) &&
        (null === input.constantString ||
          "one" === input.constantString ||
          "three" === input.constantString ||
          "two" === input.constantString) &&
        (null === input.nullableArray ||
          (Array.isArray(input.nullableArray) &&
            input.nullableArray.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            )));
      return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: ObjectHttpNullable): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "boolean" === key ||
            "bigint" === key ||
            "number" === key ||
            "string" === key ||
            "constantBoolean" === key ||
            "constantBigint" === key ||
            "constantNumber" === key ||
            "constantString" === key ||
            "nullableArray" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);
