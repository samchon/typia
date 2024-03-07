import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectGenericArray =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.createAssertGuardEquals<ObjectGenericArray>(),
  );
