import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateFunction_ObjectHttpArray = (): void => _test_functional_validateFunction(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.validateFunction(p),
)