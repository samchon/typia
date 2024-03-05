import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertReturn_TypeTagRange =
  _test_functional_assertReturn(TypeGuardError)("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.assertReturn(p),
  );
