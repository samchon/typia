import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ClassGetter = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)