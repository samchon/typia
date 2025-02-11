import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertEquals_ObjectUnionExplicit = _test_assertEquals(
  TypeGuardError,
)("ObjectUnionExplicit")<ObjectUnionExplicit>(ObjectUnionExplicit)(
  typia.createAssertEquals<ObjectUnionExplicit>(),
);
