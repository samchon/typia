import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";
export const test_misc_createPrune_ObjectHttpNullable = _test_misc_prune(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input: ObjectHttpNullable): void => {
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
});
