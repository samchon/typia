import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagArray = _test_assert(
  CustomGuardError,
)("TypeTagArray")<TypeTagArray>(TypeTagArray)(
  typia.createAssert<TypeTagArray>((p) => new CustomGuardError(p)),
);
