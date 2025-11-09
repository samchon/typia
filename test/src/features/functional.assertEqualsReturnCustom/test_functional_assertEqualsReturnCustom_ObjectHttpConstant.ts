import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectHttpConstant = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => ObjectHttpConstant) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)