import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_misc_createPrune_ObjectDescription = _test_misc_prune(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input: ObjectDescription): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if (
        "id" === key ||
        "deprecated" === key ||
        "title" === key ||
        "descriptions" === key ||
        "newLine" === key
      )
        continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
