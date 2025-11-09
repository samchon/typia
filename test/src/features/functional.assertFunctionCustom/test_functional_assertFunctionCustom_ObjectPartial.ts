import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectPartial = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => ObjectPartial) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)