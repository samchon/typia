import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectHttpFormData = _test_functional_assertParameters(TypeGuardError)(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => ObjectHttpFormData) => typia.functional.assertParameters(p),
)