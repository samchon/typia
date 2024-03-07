import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagRange = _test_assert(
  CustomGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)(
  typia.createAssert<TypeTagRange>((p) => new CustomGuardError(p)),
);
