import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_assertGuardCustom_NativeSimple = _test_assertGuard(
  CustomGuardError,
)("NativeSimple")<NativeSimple>(NativeSimple)((input) =>
  typia.assertGuard<NativeSimple>(input, (p) => new CustomGuardError(p)),
);
