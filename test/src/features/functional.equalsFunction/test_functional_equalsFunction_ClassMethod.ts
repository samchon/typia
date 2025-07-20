import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_equalsFunction_ClassMethod = (): void =>
  _test_functional_equalsFunction("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.equalsFunction(p),
  );
