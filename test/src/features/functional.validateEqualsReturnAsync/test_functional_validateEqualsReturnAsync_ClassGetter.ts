import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateEqualsReturnAsync_ClassGetter =
  _test_functional_validateEqualsReturnAsync("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => Promise<ClassGetter>) =>
      typia.functional.validateEqualsReturn(p),
  );
