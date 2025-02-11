import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_isFunction_NativeUnion = _test_functional_isFunction(
  "NativeUnion"
)(NativeUnion)(
  (p: (input: NativeUnion) => NativeUnion) => typia.functional.isFunction(p),
)