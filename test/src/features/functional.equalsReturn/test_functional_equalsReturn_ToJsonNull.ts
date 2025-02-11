import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_equalsReturn_ToJsonNull =
  _test_functional_equalsReturn("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.equalsReturn(p),
  );
