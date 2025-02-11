import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_isParameters_ObjectNullable = _test_functional_isParameters(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => ObjectNullable) => typia.functional.isParameters(p),
)