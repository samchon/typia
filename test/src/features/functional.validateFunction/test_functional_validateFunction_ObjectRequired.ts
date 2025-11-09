import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateFunction_ObjectRequired = (): void => _test_functional_validateFunction(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => ObjectRequired) => typia.functional.validateFunction(p),
)