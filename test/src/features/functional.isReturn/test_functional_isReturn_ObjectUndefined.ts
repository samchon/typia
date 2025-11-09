import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_isReturn_ObjectUndefined = (): void => _test_functional_isReturn(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => ObjectUndefined) => typia.functional.isReturn(p),
)