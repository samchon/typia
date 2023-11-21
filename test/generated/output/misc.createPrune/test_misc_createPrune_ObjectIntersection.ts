import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_misc_createPrune_ObjectIntersection = _test_misc_prune(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input: ObjectIntersection): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if ("email" === key || "name" === key || "vulnerable" === key) continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
