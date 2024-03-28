import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsParametersCustom_ObjectRecursive =
  _test_functional_assertEqualsParameters(CustomGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
