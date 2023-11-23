import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_assertClone_ObjectHierarchical = _test_misc_assertClone(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)((input) =>
  typia.misc.assertClone<ObjectHierarchical>(input),
);
