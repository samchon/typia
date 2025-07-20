import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createAssertGuardCustom_TypeTagDefault = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(typia.createAssertGuard<TypeTagDefault>((p) => new CustomGuardError(p)));
