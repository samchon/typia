import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssert_ObjectNullable = _test_assert(TypeGuardError)(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)(typia.createAssert<ObjectNullable>());
