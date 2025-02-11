import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_isFunction_ClassNonPublic = _test_functional_isFunction(
  "ClassNonPublic"
)(ClassNonPublic)(
  (p: (input: ClassNonPublic) => ClassNonPublic) => typia.functional.isFunction(p),
)