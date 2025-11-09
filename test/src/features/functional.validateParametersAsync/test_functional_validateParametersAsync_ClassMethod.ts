import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_validateParametersAsync_ClassMethod =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ClassMethod")(ClassMethod)(
      (p: (input: ClassMethod) => Promise<ClassMethod>) =>
        typia.functional.validateParameters(p),
    );
