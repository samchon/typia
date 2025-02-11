import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertReturn_ObjectRecursive =
  _test_functional_assertReturn(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertReturn(p),
  );
