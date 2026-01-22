import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateEqualsReturnAsync_DynamicTemplate =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("DynamicTemplate")(
      DynamicTemplate,
    )((p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
      typia.functional.validateEqualsReturn(p),
    );
