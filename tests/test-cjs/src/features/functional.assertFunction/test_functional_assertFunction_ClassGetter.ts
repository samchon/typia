import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertFunction_ClassGetter = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.assertFunction(p),
  );
