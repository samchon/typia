import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_validateReturn_ClassNonPublic = (): void => _test_functional_validateReturn(
  "ClassNonPublic"
)(ClassNonPublic)(
  (p: (input: ClassNonPublic) => ClassNonPublic) => typia.functional.validateReturn(p),
)