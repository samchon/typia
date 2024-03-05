import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_isReturn_DynamicTemplate =
  _test_functional_isReturn("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.isReturn(p),
  );
