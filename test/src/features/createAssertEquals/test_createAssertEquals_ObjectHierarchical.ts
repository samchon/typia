import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertEquals_ObjectHierarchical = _test_assertEquals(
  TypeGuardError,
)("ObjectHierarchical")<ObjectHierarchical>(ObjectHierarchical)(
  typia.createAssertEquals<ObjectHierarchical>(),
);
