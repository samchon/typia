import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_isParameters_SetUnion = (): void => _test_functional_isParameters(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => SetUnion) => typia.functional.isParameters(p),
)