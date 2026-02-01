import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_isFunction_SetUnion = (): void => _test_functional_isFunction(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => SetUnion) => typia.functional.isFunction(p),
)