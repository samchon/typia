import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_isParametersAsync_ClassGetter = _test_functional_isParametersAsync(
  "ClassGetter"
)(ClassGetter)(
  (p: (input: ClassGetter) => Promise<ClassGetter>) =>
    typia.functional.isParameters(p),
)