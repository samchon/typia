import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagLength = _test_assert(
  CustomGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)(
  typia.createAssert<TypeTagLength>((p) => new CustomGuardError(p)),
);
