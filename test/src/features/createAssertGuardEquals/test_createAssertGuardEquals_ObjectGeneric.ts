import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssertGuardEquals_ObjectGeneric =
  _test_assertGuardEquals(TypeGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )(typia.createAssertGuardEquals<ObjectGeneric>());
