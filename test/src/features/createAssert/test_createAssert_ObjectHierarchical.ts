import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssert_ObjectHierarchical = _test_assert(
  TypeGuardError,
)("ObjectHierarchical")<ObjectHierarchical>(ObjectHierarchical)(
  typia.createAssert<ObjectHierarchical>(),
);
