import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertCustom_TypeTagPattern = _test_assert(
  CustomGuardError,
)("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
  typia.createAssert<TypeTagPattern>((p) => new CustomGuardError(p)),
);
