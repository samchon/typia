import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeAlias } from "../../structures/NativeAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_NativeAlias = _test_assertGuard(
  CustomGuardError,
)("NativeAlias")<NativeAlias>(NativeAlias)(
  typia.createAssertGuard<NativeAlias>((p) => new CustomGuardError(p)),
);
