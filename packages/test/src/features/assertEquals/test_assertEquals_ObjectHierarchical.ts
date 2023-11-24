import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assertEquals_ObjectHierarchical = _test_assertEquals(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)((input) =>
  typia.assertEquals<ObjectHierarchical>(input),
);
