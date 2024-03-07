import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_TypeTagRange =
  _test_functional_assertReturn(TypeGuardError)("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.assertReturn(p),
  );
