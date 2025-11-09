import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { NativeUnion } from "../../structures/NativeUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_NativeUnion = (): void => _test_functional_assertReturn(TypeGuardError)(
  "NativeUnion"
)(NativeUnion)(
  (p: (input: NativeUnion) => NativeUnion) => typia.functional.assertReturn(p),
)