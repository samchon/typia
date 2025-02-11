import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_equalsReturn_DynamicUnion =
  _test_functional_equalsReturn("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.equalsReturn(p),
  );
