import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_isFunction_SetSimple = (): void => _test_functional_isFunction(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => SetSimple) => typia.functional.isFunction(p),
)