import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_isParametersAsync_DynamicUnion =
  (): Promise<void> =>
    _test_functional_isParametersAsync("DynamicUnion")(DynamicUnion)(
      (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
        typia.functional.isParameters(p),
    );
