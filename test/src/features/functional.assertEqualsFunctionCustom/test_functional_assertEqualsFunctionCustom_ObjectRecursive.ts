import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsFunctionCustom_ObjectRecursive =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
