import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_equalsParameters_ObjectNullable = _test_functional_equalsParameters(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => ObjectNullable) => typia.functional.equalsParameters(p),
)