import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectDescription = _test_assert(
  CustomGuardError,
)("ObjectDescription")<ObjectDescription>(ObjectDescription)(
  typia.createAssert<ObjectDescription>((p) => new CustomGuardError(p)),
);
