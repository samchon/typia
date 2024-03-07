import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectRecursive =
  _test_functional_assertParametersAsync(CustomGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
