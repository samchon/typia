import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_misc_createPrune_ObjectJsonTag = _test_misc_prune(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input: ObjectJsonTag): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if (
        "vulnerable" === key ||
        "description" === key ||
        "title" === key ||
        "complicate_title" === key
      )
        continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
