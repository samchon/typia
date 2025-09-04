import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertReturnAsync_ClassMethod =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ClassMethod")(
      ClassMethod,
    )((p: (input: ClassMethod) => Promise<ClassMethod>) =>
      typia.functional.assertReturn(p),
    );
