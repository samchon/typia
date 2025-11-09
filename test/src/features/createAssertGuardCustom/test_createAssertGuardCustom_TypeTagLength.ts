import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssertGuardCustom_TypeTagLength = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(typia.createAssertGuard<TypeTagLength>((p) => new CustomGuardError(p)));
