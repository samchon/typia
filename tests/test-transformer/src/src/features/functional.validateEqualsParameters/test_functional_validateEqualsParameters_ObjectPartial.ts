import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateEqualsParameters_ObjectPartial = (): void => _test_functional_validateEqualsParameters(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => ObjectPartial) => typia.functional.validateEqualsParameters(p),
)