import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectHttpFormData = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => ObjectHttpFormData) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)