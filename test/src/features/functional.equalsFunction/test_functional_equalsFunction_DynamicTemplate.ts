import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_equalsFunction_DynamicTemplate =
  _test_functional_equalsFunction("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.equalsFunction(p),
  );
