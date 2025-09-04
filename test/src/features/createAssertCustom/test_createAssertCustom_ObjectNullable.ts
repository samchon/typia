import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertCustom_ObjectNullable = (): void =>
  _test_assert(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(typia.createAssert<ObjectNullable>((p) => new CustomGuardError(p)));
