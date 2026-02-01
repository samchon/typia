import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_isReturn_NativeUnion = (): void => _test_functional_isReturn(
  "NativeUnion"
)(NativeUnion)(
  (p: (input: NativeUnion) => NativeUnion) => typia.functional.isReturn(p),
)