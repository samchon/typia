import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_isReturn_ObjectHttpNullable = _test_functional_isReturn(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => ObjectHttpNullable) => typia.functional.isReturn(p),
)