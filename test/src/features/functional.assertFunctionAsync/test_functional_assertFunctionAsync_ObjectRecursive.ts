import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertFunctionAsync_ObjectRecursive =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectRecursive")(
      ObjectRecursive,
    )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      typia.functional.assertFunction(p),
    );
