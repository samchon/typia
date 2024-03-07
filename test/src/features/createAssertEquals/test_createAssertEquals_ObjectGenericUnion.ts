import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectGenericUnion = _test_assertEquals(
  TypeGuardError,
)("ObjectGenericUnion")<ObjectGenericUnion>(ObjectGenericUnion)(
  typia.createAssertEquals<ObjectGenericUnion>(),
);
