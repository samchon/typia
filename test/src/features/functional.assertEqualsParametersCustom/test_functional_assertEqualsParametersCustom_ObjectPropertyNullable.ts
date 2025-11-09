import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ObjectPropertyNullable = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)