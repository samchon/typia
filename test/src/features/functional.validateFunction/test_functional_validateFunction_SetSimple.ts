import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_validateFunction_SetSimple = (): void => _test_functional_validateFunction(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => SetSimple) => typia.functional.validateFunction(p),
)