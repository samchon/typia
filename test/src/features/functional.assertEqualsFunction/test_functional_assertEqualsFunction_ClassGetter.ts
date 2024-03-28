import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsFunction_ClassGetter =
  _test_functional_assertEqualsFunction(TypeGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => ClassGetter) =>
    typia.functional.assertEqualsFunction(p),
  );
