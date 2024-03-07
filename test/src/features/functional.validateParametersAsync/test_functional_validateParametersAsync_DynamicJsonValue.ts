import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_validateParametersAsync_DynamicJsonValue =
  _test_functional_validateParametersAsync("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => Promise<DynamicJsonValue>) =>
    typia.functional.validateParameters(p),
  );
