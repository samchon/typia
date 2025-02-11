import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_isReturn_SetSimple = _test_functional_isReturn(
  "SetSimple",
)(SetSimple)((p: (input: SetSimple) => SetSimple) =>
  typia.functional.isReturn(p),
);
