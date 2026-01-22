import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_isReturn_ClassMethod = (): void =>
  _test_functional_isReturn("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) => typia.functional.isReturn(p),
  );
