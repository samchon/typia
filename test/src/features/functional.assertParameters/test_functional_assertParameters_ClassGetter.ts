import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertParameters_ClassGetter = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.assertParameters(p),
  );
