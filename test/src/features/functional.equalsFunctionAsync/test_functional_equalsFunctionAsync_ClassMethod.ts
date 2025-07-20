import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_equalsFunctionAsync_ClassMethod =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ClassMethod")(ClassMethod)(
      (p: (input: ClassMethod) => Promise<ClassMethod>) =>
        typia.functional.equalsFunction(p),
    );
