import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertFunctionAsyncCustom_ObjectRecursive =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ObjectRecursive")(
      ObjectRecursive,
    )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
