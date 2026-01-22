import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertGuard_ObjectGenericArray = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(typia.createAssertGuard<ObjectGenericArray>());
