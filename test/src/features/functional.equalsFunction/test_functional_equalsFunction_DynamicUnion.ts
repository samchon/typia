import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_equalsFunction_DynamicUnion =
  _test_functional_equalsFunction("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.equalsFunction(p),
  );
