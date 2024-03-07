import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagNaN = _test_assert(
  CustomGuardError,
)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(
  typia.createAssert<TypeTagNaN>((p) => new CustomGuardError(p)),
);
