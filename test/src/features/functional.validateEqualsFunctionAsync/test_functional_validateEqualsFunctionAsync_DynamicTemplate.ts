import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateEqualsFunctionAsync_DynamicTemplate =
  _test_functional_validateEqualsFunctionAsync("DynamicTemplate")(
    DynamicTemplate,
  )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
    typia.functional.validateEqualsFunction(p),
  );
