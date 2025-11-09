import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertGuardEquals_ObjectGenericArray = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.createAssertGuardEquals<ObjectGenericArray>(),
  );
