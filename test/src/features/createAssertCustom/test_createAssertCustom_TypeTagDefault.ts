import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createAssertCustom_TypeTagDefault = _test_assert(
  CustomGuardError,
)("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
  typia.createAssert<TypeTagDefault>((p) => new CustomGuardError(p)),
);
