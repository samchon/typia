import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ClassGetter = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => ClassGetter) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)