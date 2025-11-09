import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateEqualsParameters_ObjectPartialAndRequired = (): void => _test_functional_validateEqualsParameters(
  "ObjectPartialAndRequired"
)(ObjectPartialAndRequired)(
  (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) => typia.functional.validateEqualsParameters(p),
)