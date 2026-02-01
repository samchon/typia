import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_isReturnAsync_ClassGetter = (): Promise<void> => _test_functional_isReturnAsync(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.isReturn(p),
)