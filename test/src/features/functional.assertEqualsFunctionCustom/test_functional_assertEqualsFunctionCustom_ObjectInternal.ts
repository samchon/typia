import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ObjectInternal = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)