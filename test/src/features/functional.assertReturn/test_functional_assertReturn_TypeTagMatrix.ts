import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_assertReturn_TypeTagMatrix =
  _test_functional_assertReturn(TypeGuardError)("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.assertReturn(p),
  );
