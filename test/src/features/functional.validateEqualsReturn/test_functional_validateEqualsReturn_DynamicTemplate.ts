import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateEqualsReturn_DynamicTemplate = (): void =>
  _test_functional_validateEqualsReturn("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.validateEqualsReturn(p),
  );
