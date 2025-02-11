import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertFunction_ObjectRecursive =
  _test_functional_assertFunction(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertFunction(p),
  );
