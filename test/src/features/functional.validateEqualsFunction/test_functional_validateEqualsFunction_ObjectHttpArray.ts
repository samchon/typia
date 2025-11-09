import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateEqualsFunction_ObjectHttpArray = (): void => _test_functional_validateEqualsFunction(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.validateEqualsFunction(p),
)