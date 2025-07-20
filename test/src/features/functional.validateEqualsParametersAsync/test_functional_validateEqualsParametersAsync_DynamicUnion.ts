import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateEqualsParametersAsync_DynamicUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("DynamicUnion")(
      DynamicUnion,
    )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      typia.functional.validateEqualsParameters(p),
    );
