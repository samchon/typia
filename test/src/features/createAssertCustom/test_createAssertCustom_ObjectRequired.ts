import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectRequired = _test_assert(
  CustomGuardError,
)("ObjectRequired")<ObjectRequired>(ObjectRequired)(
  typia.createAssert<ObjectRequired>((p) => new CustomGuardError(p)),
);
