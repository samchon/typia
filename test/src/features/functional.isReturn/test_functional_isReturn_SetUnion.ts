import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_isReturn_SetUnion = _test_functional_isReturn(
  "SetUnion",
)(SetUnion)((p: (input: SetUnion) => SetUnion) => typia.functional.isReturn(p));
