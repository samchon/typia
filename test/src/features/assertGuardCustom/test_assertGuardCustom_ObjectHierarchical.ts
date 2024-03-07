import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectHierarchical = _test_assertGuard(
  CustomGuardError,
)("ObjectHierarchical")<ObjectHierarchical>(ObjectHierarchical)((input) =>
  typia.assertGuard<ObjectHierarchical>(input, (p) => new CustomGuardError(p)),
);
