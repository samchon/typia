import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createAssertCustom_ObjectOptional = _test_assert(
  CustomGuardError,
)("ObjectOptional")<ObjectOptional>(ObjectOptional)(
  typia.createAssert<ObjectOptional>((p) => new CustomGuardError(p)),
);
