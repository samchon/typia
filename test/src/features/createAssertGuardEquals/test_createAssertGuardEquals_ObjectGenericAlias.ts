import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertGuardEquals_ObjectGenericAlias =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.createAssertGuardEquals<ObjectGenericAlias>(),
  );
