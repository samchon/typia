import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_equals_ObjectHierarchical = _test_equals(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)((input) =>
  typia.equals<ObjectHierarchical>(input),
);
