import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createAssertGuardCustom_TypeTagCustom = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(typia.createAssertGuard<TypeTagCustom>((p) => new CustomGuardError(p)));
