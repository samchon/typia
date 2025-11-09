import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_equalsReturn_ClassGetter = (): void => _test_functional_equalsReturn(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => ClassGetter) => typia.functional.equalsReturn(p),
)