import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertFunction_TypeTagRange =
  _test_functional_assertFunction(TypeGuardError)("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.assertFunction(p),
  );
