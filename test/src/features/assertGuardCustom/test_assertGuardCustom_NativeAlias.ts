import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_assertGuardCustom_NativeAlias = _test_assertGuard(
  CustomGuardError,
)("NativeAlias")<NativeAlias>(NativeAlias)((input) =>
  typia.assertGuard<NativeAlias>(input, (p) => new CustomGuardError(p)),
);
