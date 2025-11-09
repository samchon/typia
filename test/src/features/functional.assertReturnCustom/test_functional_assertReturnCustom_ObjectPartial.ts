import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectPartial = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => ObjectPartial) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)