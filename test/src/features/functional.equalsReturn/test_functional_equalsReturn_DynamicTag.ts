import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_equalsReturn_DynamicTag =
  _test_functional_equalsReturn("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) => typia.functional.equalsReturn(p),
  );
