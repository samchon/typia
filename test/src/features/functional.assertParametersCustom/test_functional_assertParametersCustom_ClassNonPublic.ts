import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ClassNonPublic = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ClassNonPublic"
)(ClassNonPublic)(
  (p: (input: ClassNonPublic) => ClassNonPublic) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)