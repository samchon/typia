import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createAssertGuardCustom_TypeTagFormat = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(typia.createAssertGuard<TypeTagFormat>((p) => new CustomGuardError(p)));
