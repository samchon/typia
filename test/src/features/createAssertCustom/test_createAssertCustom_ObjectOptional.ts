import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectOptional = _test_assert(
  CustomGuardError,
)("ObjectOptional")<ObjectOptional>(ObjectOptional)(
  typia.createAssert<ObjectOptional>((p) => new CustomGuardError(p)),
);
