import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertFunction_TypeTagNaN = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.assertFunction(p),
  );
