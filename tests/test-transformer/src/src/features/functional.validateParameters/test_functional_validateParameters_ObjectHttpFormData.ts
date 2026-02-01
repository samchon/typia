import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_validateParameters_ObjectHttpFormData = (): void => _test_functional_validateParameters(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => ObjectHttpFormData) => typia.functional.validateParameters(p),
)