import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectRequired = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => ObjectRequired) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)