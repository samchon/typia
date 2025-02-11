import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_equalsReturn_ClassMethod =
  _test_functional_equalsReturn("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.equalsReturn(p),
  );
