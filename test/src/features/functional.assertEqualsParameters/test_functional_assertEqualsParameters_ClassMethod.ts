import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertEqualsParameters_ClassMethod =
  _test_functional_assertEqualsParameters(TypeGuardError)("ClassMethod")(
    ClassMethod,
  )((p: (input: ClassMethod) => ClassMethod) =>
    typia.functional.assertEqualsParameters(p),
  );
