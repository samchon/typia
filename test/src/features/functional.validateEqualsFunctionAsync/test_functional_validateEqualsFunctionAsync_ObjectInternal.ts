import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateEqualsFunctionAsync_ObjectInternal =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectInternal")(
      ObjectInternal,
    )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.validateEqualsFunction(p),
    );
