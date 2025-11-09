import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssertGuardCustom_TypeTagInfinite = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )(typia.createAssertGuard<TypeTagInfinite>((p) => new CustomGuardError(p)));
