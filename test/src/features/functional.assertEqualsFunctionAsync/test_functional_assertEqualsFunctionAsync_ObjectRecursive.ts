import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsFunctionAsync_ObjectRecursive =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.assertEqualsFunction(p),
  );
