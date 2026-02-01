import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateEqualsFunction_ClassGetter = (): void => _test_functional_validateEqualsFunction(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => ClassGetter) => typia.functional.validateEqualsFunction(p),
)