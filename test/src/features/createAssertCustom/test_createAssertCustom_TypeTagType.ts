import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertCustom_TypeTagType = _test_assert(
  CustomGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)(
  typia.createAssert<TypeTagType>((p) => new CustomGuardError(p)),
);
