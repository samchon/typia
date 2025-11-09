import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateParameters_ObjectNullable = (): void => _test_functional_validateParameters(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => ObjectNullable) => typia.functional.validateParameters(p),
)