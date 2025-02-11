import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertReturnAsync_ClassGetter =
  _test_functional_assertReturnAsync(TypeGuardError)("ClassGetter")(
    ClassGetter,
  )((p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertReturn(p),
  );
