import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateParametersAsync_ClassGetter =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ClassGetter")(ClassGetter)(
      (p: (input: ClassGetter) => Promise<ClassGetter>) =>
        typia.functional.validateParameters(p),
    );
