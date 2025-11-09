import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssert_ObjectHttpNullable = (): void =>
  _test_assert(TypeGuardError)("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.createAssert<ObjectHttpNullable>());
