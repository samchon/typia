import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateReturnAsync_ClassGetter = (): Promise<void> => _test_functional_validateReturnAsync(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.validateReturn(p),
)