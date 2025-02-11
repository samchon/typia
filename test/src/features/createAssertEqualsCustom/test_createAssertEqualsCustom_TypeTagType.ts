import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertEqualsCustom_TypeTagType = _test_assertEquals(
  CustomGuardError,
)("TypeTagType")<TypeTagType>(TypeTagType)(
  typia.createAssertEquals<TypeTagType>((p) => new CustomGuardError(p)),
);
