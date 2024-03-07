import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectGeneric = _test_assertEquals(
  TypeGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
  typia.createAssertEquals<ObjectGeneric>(),
);
