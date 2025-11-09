import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_isParameters_NativeUnion = (): void => _test_functional_isParameters(
  "NativeUnion"
)(NativeUnion)(
  (p: (input: NativeUnion) => NativeUnion) => typia.functional.isParameters(p),
)