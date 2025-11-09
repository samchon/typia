import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateParameters_ObjectHttpArray = (): void => _test_functional_validateParameters(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.validateParameters(p),
)