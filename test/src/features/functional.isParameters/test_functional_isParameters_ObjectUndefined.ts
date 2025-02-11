import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_isParameters_ObjectUndefined = _test_functional_isParameters(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => ObjectUndefined) => typia.functional.isParameters(p),
)