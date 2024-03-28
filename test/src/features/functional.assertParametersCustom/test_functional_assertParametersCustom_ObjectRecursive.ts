import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertParametersCustom_ObjectRecursive =
  _test_functional_assertParameters(CustomGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
