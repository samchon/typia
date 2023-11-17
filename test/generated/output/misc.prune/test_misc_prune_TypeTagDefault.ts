import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_misc_prune_TypeTagDefault = _test_misc_prune(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  ((input: TypeTagDefault): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "boolean" === key ||
          "number" === key ||
          "string" === key ||
          "text" === key ||
          "boolean_and_number_and_string" === key ||
          "union_but_boolean" === key ||
          "union_but_number" === key ||
          "union_but_string" === key ||
          "boolean_and_number_and_template" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
