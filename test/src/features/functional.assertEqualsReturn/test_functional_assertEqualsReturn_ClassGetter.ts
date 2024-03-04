import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsReturn_ClassGetter =
  _test_functional_assertEqualsReturn(TypeGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => ClassGetter) =>
    typia.functional.assertEqualsReturn(p),
  );
