import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateEqualsParameters_ClassGetter = (): void => _test_functional_validateEqualsParameters(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => ClassGetter) => typia.functional.validateEqualsParameters(p),
)