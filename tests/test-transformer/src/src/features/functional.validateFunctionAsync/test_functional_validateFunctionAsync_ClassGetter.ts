import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateFunctionAsync_ClassGetter = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.validateFunction(p),
)