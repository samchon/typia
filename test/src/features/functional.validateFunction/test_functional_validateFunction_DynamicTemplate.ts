import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateFunction_DynamicTemplate =
  _test_functional_validateFunction("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.validateFunction(p),
  );
