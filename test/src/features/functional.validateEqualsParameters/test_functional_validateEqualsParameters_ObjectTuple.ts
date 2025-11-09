import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateEqualsParameters_ObjectTuple = (): void => _test_functional_validateEqualsParameters(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => ObjectTuple) => typia.functional.validateEqualsParameters(p),
)