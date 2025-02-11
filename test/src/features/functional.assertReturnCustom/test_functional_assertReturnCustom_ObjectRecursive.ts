import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertReturnCustom_ObjectRecursive =
  _test_functional_assertReturn(CustomGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
