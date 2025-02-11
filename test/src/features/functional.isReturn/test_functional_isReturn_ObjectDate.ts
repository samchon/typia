import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_isReturn_ObjectDate = _test_functional_isReturn(
  "ObjectDate"
)(ObjectDate)(
  (p: (input: ObjectDate) => ObjectDate) => typia.functional.isReturn(p),
)