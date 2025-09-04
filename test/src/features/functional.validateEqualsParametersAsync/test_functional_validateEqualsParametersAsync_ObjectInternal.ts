import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateEqualsParametersAsync_ObjectInternal =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ObjectInternal")(
      ObjectInternal,
    )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.validateEqualsParameters(p),
    );
