import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectPropertyNullable = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)