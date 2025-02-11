import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createAssertCustom_ArrayRepeatedOptional = _test_assert(
  CustomGuardError,
)("ArrayRepeatedOptional")<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
  typia.createAssert<ArrayRepeatedOptional>((p) => new CustomGuardError(p)),
);
