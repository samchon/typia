import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_validateFunction_SetUnion = (): void => _test_functional_validateFunction(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => SetUnion) => typia.functional.validateFunction(p),
)