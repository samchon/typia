import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_equalsFunctionAsync_ClassGetter =
  _test_functional_equalsFunctionAsync("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.equalsFunction(p),
  );
