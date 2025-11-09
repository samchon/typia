import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertParametersAsync_ObjectRecursive =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ObjectRecursive")(
      ObjectRecursive,
    )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      typia.functional.assertParameters(p),
    );
