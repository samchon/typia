import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_isParameters_DynamicUnion =
  _test_functional_isParameters("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.isParameters(p),
  );
