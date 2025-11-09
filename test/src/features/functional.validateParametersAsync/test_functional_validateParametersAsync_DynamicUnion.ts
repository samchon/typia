import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateParametersAsync_DynamicUnion =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("DynamicUnion")(DynamicUnion)(
      (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
        typia.functional.validateParameters(p),
    );
