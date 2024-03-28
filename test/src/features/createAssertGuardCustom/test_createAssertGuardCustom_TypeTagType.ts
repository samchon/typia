import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertGuardCustom_TypeTagType = _test_assertGuard(
  CustomGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)(
  typia.createAssertGuard<TypeTagType>((p) => new CustomGuardError(p)),
);
