import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_equalsReturnAsync_ClassMethod =
  _test_functional_equalsReturnAsync("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => Promise<ClassMethod>) =>
      typia.functional.equalsReturn(p),
  );
