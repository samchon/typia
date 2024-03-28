import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectRecursive =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectRecursive",
  )(ObjectRecursive)(
    (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
