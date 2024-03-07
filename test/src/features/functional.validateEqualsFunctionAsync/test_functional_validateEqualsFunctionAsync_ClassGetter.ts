import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateEqualsFunctionAsync_ClassGetter =
  _test_functional_validateEqualsFunctionAsync("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.validateEqualsFunction(p),
  );
