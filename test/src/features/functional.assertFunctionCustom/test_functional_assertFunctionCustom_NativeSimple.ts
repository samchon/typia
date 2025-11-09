import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { NativeSimple } from "../../structures/NativeSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_NativeSimple = (): void => _test_functional_assertFunction(CustomGuardError)(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => NativeSimple) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)