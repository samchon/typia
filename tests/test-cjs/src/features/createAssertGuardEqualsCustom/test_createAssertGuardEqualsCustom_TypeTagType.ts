import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertGuardEqualsCustom_TypeTagType = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )(typia.createAssertGuardEquals<TypeTagType>((p) => new CustomGuardError(p)));
