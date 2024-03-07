import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ClassGetter =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertEqualsReturn(p),
  );
