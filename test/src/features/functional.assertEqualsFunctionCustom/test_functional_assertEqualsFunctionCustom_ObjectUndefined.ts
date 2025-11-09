import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ObjectUndefined = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => ObjectUndefined) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)