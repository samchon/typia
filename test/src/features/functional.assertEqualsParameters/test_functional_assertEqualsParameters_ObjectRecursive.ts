import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsParameters_ObjectRecursive =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertEqualsParameters(p),
  );
