import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateParameters_ObjectRequired = (): void => _test_functional_validateParameters(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => ObjectRequired) => typia.functional.validateParameters(p),
)