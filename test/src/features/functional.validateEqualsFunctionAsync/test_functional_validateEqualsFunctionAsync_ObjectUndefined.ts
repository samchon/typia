import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateEqualsFunctionAsync_ObjectUndefined =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectUndefined")(
      ObjectUndefined,
    )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
      typia.functional.validateEqualsFunction(p),
    );
