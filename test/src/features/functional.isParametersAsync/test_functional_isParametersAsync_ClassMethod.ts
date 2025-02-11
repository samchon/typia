import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_isParametersAsync_ClassMethod =
  _test_functional_isParametersAsync("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => Promise<ClassMethod>) =>
      typia.functional.isParameters(p),
  );
