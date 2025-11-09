import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_isParameters_SetSimple = (): void => _test_functional_isParameters(
  "SetSimple"
)(SetSimple)(
  (p: (input: SetSimple) => SetSimple) => typia.functional.isParameters(p),
)