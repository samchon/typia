import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { NativeUnion } from "../../structures/NativeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_NativeUnion = (): void => _test_functional_assertFunction(CustomGuardError)(
  "NativeUnion"
)(NativeUnion)(
  (p: (input: NativeUnion) => NativeUnion) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)