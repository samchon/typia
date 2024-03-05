import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_equalsFunction_DynamicTag =
  _test_functional_equalsFunction("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.equalsFunction(p),
  );
