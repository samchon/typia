import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_assertParameters_ClassMethod = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.assertParameters(p),
  );
