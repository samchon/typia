import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_validateParametersAsync_DynamicNever =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("DynamicNever")(DynamicNever)(
      (p: (input: DynamicNever) => Promise<DynamicNever>) =>
        typia.functional.validateParameters(p),
    );
