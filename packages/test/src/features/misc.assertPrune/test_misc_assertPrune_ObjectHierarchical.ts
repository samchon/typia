import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_assertPrune_ObjectHierarchical = _test_misc_assertPrune(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)((input) =>
  typia.misc.assertPrune<ObjectHierarchical>(input),
);
