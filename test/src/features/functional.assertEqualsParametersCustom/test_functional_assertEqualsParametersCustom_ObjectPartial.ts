import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ObjectPartial = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => ObjectPartial) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)