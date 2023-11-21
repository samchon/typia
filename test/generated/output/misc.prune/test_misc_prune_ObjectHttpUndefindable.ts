import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_misc_prune_ObjectHttpUndefindable = _test_misc_prune(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
  ((input: ObjectHttpUndefindable): void => {
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
  })(input),
);
