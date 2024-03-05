import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertReturn_ClassGetter =
  _test_functional_assertReturn(TypeGuardError)("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.assertReturn(p),
  );
