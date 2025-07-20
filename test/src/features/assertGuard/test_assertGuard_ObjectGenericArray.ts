import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertGuard_ObjectGenericArray = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input) => typia.assertGuard<ObjectGenericArray>(input));
