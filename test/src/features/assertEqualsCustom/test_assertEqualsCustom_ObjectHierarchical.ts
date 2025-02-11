import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assertEqualsCustom_ObjectHierarchical = _test_assertEquals(
  CustomGuardError,
)("ObjectHierarchical")<ObjectHierarchical>(ObjectHierarchical)((input) =>
  typia.assertEquals<ObjectHierarchical>(input, (p) => new CustomGuardError(p)),
);
