import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssertCustom_TypeTagInfinite = _test_assert(
  CustomGuardError,
)("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)(
  typia.createAssert<TypeTagInfinite>((p) => new CustomGuardError(p)),
);
