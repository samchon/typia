import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateEqualsParameters_ObjectHttpArray = (): void => _test_functional_validateEqualsParameters(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.validateEqualsParameters(p),
)