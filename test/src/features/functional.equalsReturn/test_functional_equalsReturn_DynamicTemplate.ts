import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_equalsReturn_DynamicTemplate =
  _test_functional_equalsReturn("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.equalsReturn(p),
  );
