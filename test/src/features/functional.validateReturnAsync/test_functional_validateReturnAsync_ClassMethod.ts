import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateReturnAsync_ClassMethod =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ClassMethod")(ClassMethod)(
      (p: (input: ClassMethod) => Promise<ClassMethod>) =>
        typia.functional.validateReturn(p),
    );
