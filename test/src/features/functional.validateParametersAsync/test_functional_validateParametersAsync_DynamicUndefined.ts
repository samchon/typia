import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_validateParametersAsync_DynamicUndefined =
  _test_functional_validateParametersAsync("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
    typia.functional.validateParameters(p),
  );
