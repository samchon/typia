import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsFunction_ObjectRecursive =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertEqualsFunction(p),
  );
