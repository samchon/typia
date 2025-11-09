import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateEqualsParameters_ObjectInternal = (): void => _test_functional_validateEqualsParameters(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.validateEqualsParameters(p),
)