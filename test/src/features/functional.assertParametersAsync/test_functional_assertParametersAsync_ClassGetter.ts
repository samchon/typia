import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertParametersAsync_ClassGetter =
  _test_functional_assertParametersAsync(TypeGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertParameters(p),
  );
