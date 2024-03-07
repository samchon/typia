import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";
export const test_misc_createPrune_ObjectHttpTypeTag = _test_misc_prune(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input: ObjectHttpTypeTag): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if (
        "int32" === key ||
        "uint64" === key ||
        "uuid" === key ||
        "range" === key ||
        "length" === key
      )
        continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
