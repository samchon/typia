import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createAssertGuardCustom_TypeTagArray = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(typia.createAssertGuard<TypeTagArray>((p) => new CustomGuardError(p)));
