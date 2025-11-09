import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateEqualsFunctionAsync_ObjectRecursive =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectRecursive")(
      ObjectRecursive,
    )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      typia.functional.validateEqualsFunction(p),
    );
