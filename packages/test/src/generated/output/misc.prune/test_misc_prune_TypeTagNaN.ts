import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagNaN } from "../../../structures/TypeTagNaN";

export const test_misc_prune_TypeTagNaN = _test_misc_prune(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)((input) =>
  ((input: TypeTagNaN): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "value" === key ||
          "ranged" === key ||
          "minimum" === key ||
          "maximum" === key ||
          "multipleOf" === key ||
          "typed" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
