import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_isFunctionAsync_ClassGetter = _test_functional_isFunctionAsync(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.isFunction(p),
)