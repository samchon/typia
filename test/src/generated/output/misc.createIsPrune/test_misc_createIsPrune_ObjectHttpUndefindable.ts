import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";
export const test_misc_createIsPrune_ObjectHttpUndefindable =
  _test_misc_isPrune("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input: any): input is ObjectHttpUndefindable => {
    const is = (input: any): input is ObjectHttpUndefindable => {
      const $io0 = (input: any): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.bigint || "bigint" === typeof input.bigint) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.constantBoolean ||
          true === input.constantBoolean) &&
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
    };
    const prune = (input: ObjectHttpUndefindable): void => {
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
            "constantString" === key
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
  });
