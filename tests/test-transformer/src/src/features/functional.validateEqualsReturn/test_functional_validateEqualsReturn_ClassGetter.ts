import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateEqualsReturn_ClassGetter = (): void => _test_functional_validateEqualsReturn(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => ClassGetter) => typia.functional.validateEqualsReturn(p),
)