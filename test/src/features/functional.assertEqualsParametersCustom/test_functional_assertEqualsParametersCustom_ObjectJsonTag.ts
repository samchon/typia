import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ObjectJsonTag = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => ObjectJsonTag) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)