import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_misc_prune_ObjectOptional = _test_misc_prune(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  ((input: ObjectOptional): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "id" === key ||
          "name" === key ||
          "email" === key ||
          "sequence" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
