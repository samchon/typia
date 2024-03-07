import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectGenericAlias = _test_assertEquals(
  TypeGuardError,
)("ObjectGenericAlias")<ObjectGenericAlias>(ObjectGenericAlias)(
  typia.createAssertEquals<ObjectGenericAlias>(),
);
