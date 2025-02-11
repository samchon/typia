import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_equalsReturnAsync_ClassGetter = _test_functional_equalsReturnAsync(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.equalsReturn(p),
)