import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assertCustom_ObjectHierarchical = _test_assert(
  CustomGuardError,
)("ObjectHierarchical")<ObjectHierarchical>(ObjectHierarchical)((input) =>
  typia.assert<ObjectHierarchical>(input, (p) => new CustomGuardError(p)),
);
