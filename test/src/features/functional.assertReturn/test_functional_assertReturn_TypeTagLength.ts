import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertReturn_TypeTagLength =
  _test_functional_assertReturn(TypeGuardError)("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.assertReturn(p),
  );
