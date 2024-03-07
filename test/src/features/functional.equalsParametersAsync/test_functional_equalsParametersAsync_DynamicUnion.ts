import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_equalsParametersAsync_DynamicUnion =
  _test_functional_equalsParametersAsync("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      typia.functional.equalsParameters(p),
  );
