import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssert_ObjectGenericArray = (): void =>
  _test_assert(TypeGuardError)("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(typia.createAssert<ObjectGenericArray>());
