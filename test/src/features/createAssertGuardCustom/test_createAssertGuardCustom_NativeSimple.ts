import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createAssertGuardCustom_NativeSimple = (): void =>
  _test_assertGuard(CustomGuardError)("NativeSimple")<NativeSimple>(
    NativeSimple,
  )(typia.createAssertGuard<NativeSimple>((p) => new CustomGuardError(p)));
