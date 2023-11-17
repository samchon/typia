import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_misc_createPrune_ObjectHttpArray = _test_misc_prune(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input: ObjectHttpArray): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if (
        "booleans" === key ||
        "bigints" === key ||
        "numbers" === key ||
        "strings" === key ||
        "templates" === key
      )
        continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
