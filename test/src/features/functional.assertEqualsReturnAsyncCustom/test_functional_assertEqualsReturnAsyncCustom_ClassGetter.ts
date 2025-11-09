import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ClassGetter = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)