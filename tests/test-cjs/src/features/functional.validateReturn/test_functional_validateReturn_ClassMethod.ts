import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateReturn_ClassMethod = (): void =>
  _test_functional_validateReturn("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.validateReturn(p),
  );
