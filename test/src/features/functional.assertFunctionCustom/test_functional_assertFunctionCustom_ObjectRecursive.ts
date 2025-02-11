import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertFunctionCustom_ObjectRecursive =
  _test_functional_assertFunction(CustomGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
