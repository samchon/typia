import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateFunction_ClassGetter = (): void => _test_functional_validateFunction(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => ClassGetter) => typia.functional.validateFunction(p),
)