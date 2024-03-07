import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectRecursive =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.assertFunction(p),
  );
