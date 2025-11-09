import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_isReturn_ClassGetter = (): void => _test_functional_isReturn(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => ClassGetter) => typia.functional.isReturn(p),
)