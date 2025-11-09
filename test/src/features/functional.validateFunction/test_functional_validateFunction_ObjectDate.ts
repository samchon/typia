import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_validateFunction_ObjectDate = (): void => _test_functional_validateFunction(
  "ObjectDate"
)(ObjectDate)(
  (p: (input: ObjectDate) => ObjectDate) => typia.functional.validateFunction(p),
)