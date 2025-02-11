import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_assertGuard_NativeSimple = _test_assertGuard(TypeGuardError)(
  "NativeSimple",
)<NativeSimple>(NativeSimple)((input) =>
  typia.assertGuard<NativeSimple>(input),
);
