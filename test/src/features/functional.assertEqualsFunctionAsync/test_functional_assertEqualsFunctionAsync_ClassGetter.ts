import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertEqualsFunctionAsync_ClassGetter =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ClassGetter")(
      ClassGetter,
    )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.assertEqualsFunction(p),
    );
